import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AlternativeService } from './alternative.service';
import { CreateAlternativeDto } from './dto/create-alternative.dto';
import { UpdateAlternativeDto } from './dto/update-alternative.dto';

@Controller()
export class AlternativeController {
  constructor(private readonly alternativeService: AlternativeService) {}

  @MessagePattern({ cmd: 'evaluation.create.alternative' })
  create(@Payload() createAlternativeDto: CreateAlternativeDto) {
    return this.alternativeService.create(createAlternativeDto);
  }

  @MessagePattern({ cmd: 'evaluation.update.alternative' })
  update(@Payload() updateAlternativeDto: UpdateAlternativeDto) {
    return this.alternativeService.update(updateAlternativeDto.id, updateAlternativeDto);
  }

  @MessagePattern({ cmd: 'evaluation.remove.alternative' })
  remove(@Payload() id: string) {
    return this.alternativeService.remove(id);
  }
}
