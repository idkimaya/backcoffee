import { Module } from '@nestjs/common';
import { MilkTypesController } from './milk-types.controller';
import { MilkTypesService } from './milk-types.service';

@Module({
  controllers: [MilkTypesController],
  providers: [MilkTypesService]
})
export class MilkTypesModule {}
