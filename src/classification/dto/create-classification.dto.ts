import { IsNumber, IsString, Min } from "class-validator";

export class CreateClassificationDto {

  @IsString()
  templateTestId: string;

  @IsNumber()
  @Min(0)
  minScore: number;

  @IsNumber()
  @Min(0)
  maxScore: number;

  @IsString()
  interpretation: string;
}
