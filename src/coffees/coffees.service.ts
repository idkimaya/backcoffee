import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Coffees } from '.prisma/client';
import { CreateCoffeeDto } from './dto/create-coffees.dto';
import { UpdateCoffeeDto } from './dto/update-coffees.dto';

@Injectable()
export class CoffeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Coffees[]> {
    return this.prisma.coffees.findMany();
  }

  async findById(id: number): Promise<Coffees> {
    return this.prisma.coffees.findUnique({ where: { coffeeID: id } });
  }

  async create(data: CreateCoffeeDto): Promise<Coffees> {
    return this.prisma.coffees.create({ data });
  }

  async update(id: number, data: UpdateCoffeeDto): Promise<Coffees> {
    return this.prisma.coffees.update({ where: { coffeeID: id }, data });
  }

  
  async delete(id: number): Promise<Coffees> {
    return this.prisma.coffees.delete({ where: { coffeeID: id } });
  }
}

