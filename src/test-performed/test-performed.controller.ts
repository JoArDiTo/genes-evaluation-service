import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TestPerformedService } from './test-performed.service';
import { CreateTestPerformedDto } from './dto/create-test-performed.dto';

@Controller()
export class TestPerformedController {
  constructor(private readonly testPerformedService: TestPerformedService) {}

  @MessagePattern({ cmd: 'evaluation.create.test' })
  create(@Payload() createTestPerformedDto: CreateTestPerformedDto) {
    return this.testPerformedService.create(createTestPerformedDto);
  }

  @MessagePattern({ cmd: 'evaluation.all.test' })
  findAll(userId: string) {
    return this.testPerformedService.findAll(userId);
  }

  @MessagePattern({ cmd: 'evaluation.one.test' })
  findOne(@Payload() id: string) {
    return this.testPerformedService.findOne(id);
  }
}
