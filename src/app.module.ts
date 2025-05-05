import { Module } from '@nestjs/common';
import { TemplateTestModule } from './template-test/template-test.module';
import { QuestionModule } from './question/question.module';
import { AlternativeModule } from './alternative/alternative.module';

@Module({
  imports: [TemplateTestModule, QuestionModule, AlternativeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
