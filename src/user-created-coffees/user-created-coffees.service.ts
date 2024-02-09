import { Injectable } from '@nestjs/common';
import { UserCreatedCoffees } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserCreatedCoffeeDto } from './dto/create-user-created-coffee.dto';
import { UpdateUserCreatedCoffeeDto } from './dto/update-user-created-coffee.dto';

@Injectable()
export class UserCreatedCoffeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserCreatedCoffees[]> {
    return this.prisma.userCreatedCoffees.findMany({
      include: {
        user: {
          select: { username: true, email: false, password: false },
        },
        Flavors: true,
        Toppings: true,
        MilkTypes: true,
        UserCreatedCoffees_Order: true,
      },
    });
  }

  async findById(id: number): Promise<UserCreatedCoffees> {
    return this.prisma.userCreatedCoffees.findUnique({
      where: { userCreatedCoffeeID: id },
      include: {
        user: { select: { username: true, email: false, password: false } },
        Flavors: true,
        Toppings: true,
        MilkTypes: true,
        UserCreatedCoffees_Order: true,
      },
    });
  }

  async create(data: CreateUserCreatedCoffeeDto): Promise<UserCreatedCoffees> {
    return this.prisma.userCreatedCoffees.create({ data });
  }

  async update(
    id: number,
    data: UpdateUserCreatedCoffeeDto,
  ): Promise<UserCreatedCoffees> {
    return this.prisma.userCreatedCoffees.update({
      where: { userCreatedCoffeeID: id },
      data,
    });
  }

  async delete(id: number): Promise<UserCreatedCoffees> {
    return this.prisma.userCreatedCoffees.delete({
      where: { userCreatedCoffeeID: id },
    });
  }
}
