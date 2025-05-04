import { Module } from '@nestjs/common';
import { TemplateTestService } from './template-test.service';
import { TemplateTestController } from './template-test.controller';

@Module({
  controllers: [TemplateTestController],
  providers: [TemplateTestService],
})
export class TemplateTestModule {}
