import { PartialType } from '@nestjs/mapped-types';
import { CreateAlternativeDto } from './create-alternative.dto';
import { IsString } from 'class-validator';

export class UpdateAlternativeDto extends PartialType(CreateAlternativeDto) {
  @IsString()
  id: string;
}
