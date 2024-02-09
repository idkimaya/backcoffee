import { Injectable } from '@nestjs/common';
import { Orders } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order-dto';
import { UpdateOrderDto } from './dto/update-order-dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Orders[]> {
    return this.prisma.orders.findMany({
      include: {
        UserCreatedCoffees_Order: true,
        Coffee_Order: true,
        user: {
          select: { username: true, email: false, password: false },
        },
      },
    });
  }

  async findById(id: number): Promise<Orders> {
    return this.prisma.orders.findUnique({
      where: { orderID: id },
      include: {
        UserCreatedCoffees_Order: true,
        Coffee_Order: true,
        user: {
          select: { username: true, email: false, password: false },
        },
      },
    });
  }

  async create(data: CreateOrderDto): Promise<Orders> {
    return this.prisma.orders.create({ data });
  }

  async update(id: number, data: UpdateOrderDto): Promise<Orders> {
    return this.prisma.orders.update({ where: { orderID: id }, data });
  }

  async delete(id: number): Promise<Orders> {
    return this.prisma.orders.delete({ where: { orderID: id } });
  }
}
