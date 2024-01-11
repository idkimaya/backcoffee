import { Module } from '@nestjs/common';
import { UserCreatedCoffeesController } from './user-created-coffees.controller';
import { UserCreatedCoffeesService } from './user-created-coffees.service';

@Module({
  controllers: [UserCreatedCoffeesController],
  providers: [UserCreatedCoffeesService]
})
export class UserCreatedCoffeesModule {}
