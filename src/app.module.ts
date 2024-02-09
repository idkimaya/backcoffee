import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CoffeesModule } from './coffees/coffees.module';
import { UserCreatedCoffeesModule } from './user-created-coffees/user-created-coffees.module';
import { OrdersModule } from './orders/orders.module';
import { FlavorsModule } from './flavors/flavors.module';
import { ToppingsModule } from './toppings/toppings.module';
import { MilkTypesModule } from './milk-types/milk-types.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, CoffeesModule, UserCreatedCoffeesModule, OrdersModule, FlavorsModule, ToppingsModule, MilkTypesModule],

})
export class AppModule {}
