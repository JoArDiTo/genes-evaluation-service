import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TemplateTestService } from './template-test.service';
import { CreateTemplateTestDto } from './dto/create-template-test.dto';
import { UpdateTemplateTestDto } from './dto/update-template-test.dto';

@Controller()
export class TemplateTestController {
  constructor(private readonly templateTestService: TemplateTestService) {}

  @MessagePattern({ cmd: 'evaluation.create.template' })
  create(@Payload() createTemplateTestDto: CreateTemplateTestDto) {
    return this.templateTestService.create(createTemplateTestDto);
  }

  @MessagePattern({ cmd: 'evaluation.all.template' })
  findAll() {
    return this.templateTestService.findAll();
  }

  @MessagePattern({ cmd: 'evaluation.one.template' })
  findOne(@Payload() id: string) {
    return this.templateTestService.findOne(id);
  }

  @MessagePattern({ cmd: 'evaluation.update.template' })
  update(@Payload() updateTemplateTestDto: UpdateTemplateTestDto) {
    return this.templateTestService.update(updateTemplateTestDto.id, updateTemplateTestDto);
  }

  @MessagePattern({ cmd: 'evaluation.remove.template' })
  remove(@Payload() id: string) {
    return this.templateTestService.remove(id);
  }
}
