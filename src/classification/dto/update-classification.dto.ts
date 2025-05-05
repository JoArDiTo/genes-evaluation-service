import { PartialType } from '@nestjs/mapped-types';
import { CreateClassificationDto } from './create-classification.dto';
import { IsString } from 'class-validator';

export class UpdateClassificationDto extends PartialType(CreateClassificationDto) {
  @IsString()
  id: string;
}
