import { IsNumber, IsString, Min } from "class-validator";

export class CreateAlternativeDto {

  @IsString()
  templateTestId: string;

  @IsString()
  content: string;

  @IsNumber()
  @Min(0)
  value: number;
}
