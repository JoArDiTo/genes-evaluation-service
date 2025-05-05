import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateClassificationDto } from './dto/create-classification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';
import { PrismaClient } from 'generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ClassificationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createClassificationDto: CreateClassificationDto) {
    const { templateTestId, interpretation } = createClassificationDto;
    const existingClassification = await this.classification.findFirst({
      where: { interpretation: interpretation }
    });

    if (existingClassification) throw new RpcException({
      status: 400,
      message: `Classification with interpretation "${interpretation}" already exists`
    })

    const existingTemplateTest = await this.templateTest.findUnique({
      where: { id: templateTestId }
    });

    if (!existingTemplateTest) throw new RpcException({
      status: 400,
      message: `The template test with id ${templateTestId} does not exist`,
    });

    const newClassification = await this.classification.create({
      data: { ...createClassificationDto }
    })
    
    return newClassification;
  }

  async findOne(id: string) {
    const exist = await this.classification.findUnique({
      where: { id: id }
    });

    if (!exist) throw new RpcException({
      status: 404,
      message: `Classification with id ${id} not found`,
    });

    return exist;
  }

  async update(id: string, updateClassificationDto: UpdateClassificationDto) {
    await this.findOne(id);
    const { id:_, templateTestId:__, ...data } = updateClassificationDto;

    return this.classification.update({
      where: { id: id },
      data: data
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    
    return this.classification.delete({
      where: { id: id }
    });
  }
}
