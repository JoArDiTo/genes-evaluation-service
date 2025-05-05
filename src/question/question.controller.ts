import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller()
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @MessagePattern({ cmd: 'evaluation.create.question' })
  create(@Payload() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @MessagePattern({ cmd: 'evaluation.update.question' })
  update(@Payload() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(updateQuestionDto.id, updateQuestionDto);
  }

  @MessagePattern({ cmd: 'evaluation.remove.question' })
  remove(@Payload() id: string) {
    return this.questionService.remove(id);
  }
}
