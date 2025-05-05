import { Module } from '@nestjs/common';
import { TestPerformedService } from './test-performed.service';
import { TestPerformedController } from './test-performed.controller';

@Module({
  controllers: [TestPerformedController],
  providers: [TestPerformedService],
})
export class TestPerformedModule {}
