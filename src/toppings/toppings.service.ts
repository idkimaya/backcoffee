import { Injectable } from '@nestjs/common';
import { Toppings, Prisma } from '@prisma/client'; 
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ToppingsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Toppings[]> {
    return this.prisma.toppings.findMany();
  }

  async findById(id: number): Promise<Toppings> {
    return this.prisma.toppings.findUnique({ where: { toppingID: id } });
  }

  async create(data: Prisma.ToppingsCreateInput): Promise<Toppings> { 
    return this.prisma.toppings.create({ data });
  }

  async delete(id: number): Promise<Toppings> {
    return this.prisma.toppings.delete({ where: { toppingID: id } });
  }
}

