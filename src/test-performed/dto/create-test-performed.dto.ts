import { IsArray, IsNumber, IsString, Min } from "class-validator";

export class CreateTestPerformedDto {

  @IsString()
  templateTestId: string;

  @IsNumber()
  @Min(0)
  score: number;

  @IsString()
  userId: string;

  @IsArray()
  answers: { questionId: string; alternativeId: string }[];
}
