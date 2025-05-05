import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTestPerformedDto } from './dto/create-test-performed.dto';
import { UpdateTestPerformedDto } from './dto/update-test-performed.dto';
import { PrismaClient } from 'generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class TestPerformedService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createTestPerformedDto: CreateTestPerformedDto) {
    const { templateTestId, score, answers } = createTestPerformedDto;
    
    const existingTemplateTest = await this.templateTest.findUnique({
      where: { id: templateTestId },
    })

    if (!existingTemplateTest) throw new RpcException({
      status: 400,
      message: `Template test with id ${templateTestId} not found`,
    })

    const classificationId = await this.getClassificationId(templateTestId, score)

    const { answers:_, ...rest } = createTestPerformedDto

    const newTestPerformed = await this.testPerformed.create({
      data: { classificationId, ...rest }
    })

    const { id: testPerformedId } = newTestPerformed;
    
    const newAnswers = answers.map(({ questionId, alternativeId }) => ({
      testPerformedId,
      questionId,
      alternativeId,
    }))

    await this.answer.createMany({
      data: newAnswers,
    })
    
    return { 
      ...newTestPerformed, 
      answers: newAnswers.map(({ questionId, alternativeId }) => ({ questionId, alternativeId }))
    };

  }

  findAll(userId: string) {
    return this.testPerformed.findMany({
      where: { userId }
    })
  }

  async findOne(id: string) {
    const existingTestPerformed = await this.testPerformed.findUnique({ where: { id: id } });

    if (!existingTestPerformed) throw new RpcException({
      status: 400,
      message: `Test Performed with id ${id} not found`,
    });

    const templateTest = await this.templateTest.findUnique({
      select: { id: true, name: true, description: true },
      where: { id: existingTestPerformed.templateTestId },
    })

    const classification = await this.classification.findUnique({
      select: { interpretation: true },
      where: { id: existingTestPerformed.classificationId },
    })

    const answers = await this.answer.findMany({ 
      select:{ questionId: true, alternativeId: true }, 
      where: { testPerformedId: id }
    });

    const { updatedAt:_, classificationId:__, templateTestId:___,  ...testPerformed } = existingTestPerformed;
    
    const answersWithQuestion = await Promise.all(answers.map(async ({ questionId, alternativeId }) => {
      const question = await this.question.findUnique({ where: { id: questionId } });

      const alternative = await this.alternative.findUnique({ where: { id: alternativeId } });

      return { question: question?.content, alternative: alternative?.content, value: alternative?.value };
    }))

    return { ...testPerformed, templateTest, ...classification, answers: answersWithQuestion };
  }

  async getClassificationId(templateTestId: string, score: number) {

    const classification = await this.classification.findFirst({
      where: { 
        templateTestId,
        minScore: { lte: score },
        maxScore: { gte: score },
      }
    })

    if (!classification) throw new RpcException({
      status: 400,
      message: `Classification not found for template test with id ${templateTestId} and score ${score}`,
    })

    return classification.id;
  }
}
