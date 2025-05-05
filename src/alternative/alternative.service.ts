import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAlternativeDto } from './dto/create-alternative.dto';
import { UpdateAlternativeDto } from './dto/update-alternative.dto';
import { PrismaClient } from 'generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AlternativeService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createAlternativeDto: CreateAlternativeDto) {
    const { content, templateTestId } = createAlternativeDto;

    const existingAlternative = await this.alternative.findFirst({
      where: { content: content }
    });

    if (existingAlternative) throw new RpcException({
      status: 400,
      message: `The alternative with content ${content} already exists`,
    })

    const existingTemplateTest = await this.templateTest.findUnique({
      where: { id: templateTestId }
    });

    if (!existingTemplateTest) throw new RpcException({
      status: 400,
      message: `The template test with id ${templateTestId} does not exist`,
    });

    const newAlternative = await this.alternative.create({
      data: { ...createAlternativeDto }
    })

    return newAlternative;
  }

  async findOne(id: string) {
    const exist = await this.alternative.findUnique({
      where: { id: id }
    });

    if (!exist) throw new RpcException({
      status: 400,
      message: `The alternative with id ${id} does not exist`,
    });

    return exist;
  }

  async update(id: string, updateAlternativeDto: UpdateAlternativeDto) {
    await this.findOne(id);

    const { id:_, templateTestId:__, ...data } = updateAlternativeDto;
    
    return this.alternative.update({
      where: { id: id },
      data: data
    })
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.alternative.delete({
      where: { id: id }
    });
  }
}
