import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClassificationService } from './classification.service';
import { CreateClassificationDto } from './dto/create-classification.dto';
import { UpdateClassificationDto } from './dto/update-classification.dto';

@Controller()
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @MessagePattern({ cmd: 'evaluation.create.classification' })
  create(@Payload() createClassificationDto: CreateClassificationDto) {
    return this.classificationService.create(createClassificationDto);
  }

  @MessagePattern({ cmd: 'evaluation.update.classification' })
  update(@Payload() updateClassificationDto: UpdateClassificationDto) {
    return this.classificationService.update(updateClassificationDto.id, updateClassificationDto);
  }

  @MessagePattern({ cmd: 'evaluation.remove.classification' })
  remove(@Payload() id: string) {
    return this.classificationService.remove(id);
  }
}
