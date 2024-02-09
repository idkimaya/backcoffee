import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Orders } from '@prisma/client';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order-dto';
import { UpdateOrderDto } from './dto/update-order-dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<Orders[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Orders> {
    return this.ordersService.findById(id);
  }

  @Post()
  async create(@Body() createOrdersDto: CreateOrderDto): Promise<Orders> {
    return this.ordersService.create(createOrdersDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateOrdersDto: UpdateOrderDto): Promise<Orders> {
    return this.ordersService.update(id, updateOrdersDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Orders> {
    return this.ordersService.delete(id);
  }
}
