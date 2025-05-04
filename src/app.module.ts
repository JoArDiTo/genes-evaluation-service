import { Module } from '@nestjs/common';
import { TemplateTestModule } from './template-test/template-test.module';

@Module({
  imports: [TemplateTestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
