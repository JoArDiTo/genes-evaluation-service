import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateTestDto } from './create-template-test.dto';
import { IsString } from 'class-validator';

export class UpdateTemplateTestDto extends PartialType(CreateTemplateTestDto) {
  @IsString()
  id: string;
}
