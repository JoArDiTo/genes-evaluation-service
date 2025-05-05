import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaClient } from 'generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class QuestionService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createQuestionDto: CreateQuestionDto) {
    const { content, templateTestId } = createQuestionDto;
    const existingQuestion = await this.question.findFirst({
      where: { content: content }
    });

    if (existingQuestion) throw new RpcException({
      status: 400,
      message: `The question with content ${content} already exists`,
    });

    const existingTemplateTest = await this.templateTest.findUnique({
      where: { id: templateTestId }
    });

    if (!existingTemplateTest) throw new RpcException({
      status: 400,
      message: `The template test with id ${templateTestId} does not exist`,
    });

    const newQuestion = await this.question.create({
      data: { ...createQuestionDto }
    })

    return newQuestion;
  }

  async findOne(id: string){
    const exist = await this.question.findUnique({ where: { id: id }});
    if (!exist) throw new RpcException({
      status: 400,
      message: `Question with id ${id} not found`
    });

    return exist;
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    await this.findOne(id);

    const { content } = updateQuestionDto;

    return this.question.update({
      where: { id: id },
      data: { content: content }
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.question.delete({
      where: { id: id }
    })
  }
}
