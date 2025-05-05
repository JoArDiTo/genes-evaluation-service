import { IsString } from "class-validator";

export class CreateQuestionDto {

  @IsString()
  templateTestId: string;
  
  @IsString()
  content: string;

}
