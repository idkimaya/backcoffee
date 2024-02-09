import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Toppings } from '@prisma/client';
import { CreateToppingDto } from './dto/create-topping-dto';
import { ToppingsService } from './toppings.service';

@Controller('toppings')
export class ToppingsController {
    constructor(private readonly toppingsService: ToppingsService) {}

  @Get()
  async findAll(): Promise<Toppings[]> {
    return this.toppingsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Toppings> {
    return this.toppingsService.findById(id);
  }

  @Post()
  async create(@Body() createToppingDto: CreateToppingDto): Promise<Toppings> {
    return this.toppingsService.create(createToppingDto);
  }


  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Toppings> {
    return this.toppingsService.delete(id);
  }
}
