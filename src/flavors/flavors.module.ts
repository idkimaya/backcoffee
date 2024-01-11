import { Module } from '@nestjs/common';
import { FlavorsController } from './flavors.controller';
import { FlavorsService } from './flavors.service';

@Module({
  controllers: [FlavorsController],
  providers: [FlavorsService]
})
export class FlavorsModule {}
