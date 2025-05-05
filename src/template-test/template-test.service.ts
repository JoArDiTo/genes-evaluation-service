import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTemplateTestDto } from './dto/create-template-test.dto';
import { UpdateTemplateTestDto } from './dto/update-template-test.dto';
import { PrismaClient } from 'generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class TemplateTestService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  async create(createTemplateTestDto: CreateTemplateTestDto) {
    const { name } = createTemplateTestDto;
    const existingTemplateTest = await this.templateTest.findFirst({
      where: { name: name }
    });

    if (existingTemplateTest) throw new RpcException({
      status: 400,
      message: `The template test with name ${name} already exists`,
    })

    const newTemplateTest = await this.templateTest.create({
      data: {
        ...createTemplateTestDto,
      }
    });
    
    return newTemplateTest;
  }

  async findAll() {
    return this.templateTest.findMany({
      where: { available: true }
    });
  }

  async findOne(id: string) {
    const exist = await this.templateTest.findUnique({ where: { id: id }});
    if (!exist) throw new RpcException({
      status: 400,
      message: `Template test with id ${id} not found`
    });

    const questions = await this.question.findMany({
      select: { id: true, content: true },
      where: { templateTestId: id }
    })

    const alternatives = await this.alternative.findMany({
      select: { id: true, content: true, value: true },
      where: { templateTestId: id }
    })

    return { ...exist, questions, alternatives };
  }

  async update(id: string, updateTemplateTestDto: UpdateTemplateTestDto) {
    const { id:_, ...data } = updateTemplateTestDto;
    
    await this.findOne(id)

    return this.templateTest.update({
      where: { id: id },
      data: data
    }) 
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.templateTest.update({
      where: { id: id },
      data: { available: false }
    }) 
  }
}
