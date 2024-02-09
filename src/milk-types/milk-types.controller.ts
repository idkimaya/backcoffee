import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MilkTypes } from '@prisma/client';
import { CreateMilkDto } from './dto/create-milk-dto';
import { MilkTypesService } from './milk-types.service';

@Controller('milk-types')
export class MilkTypesController {
    constructor( private readonly milkTypesServive: MilkTypesService) {}

  @Get()
  async findAll(): Promise<MilkTypes[]> {
    return this.milkTypesServive.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<MilkTypes> {
    return this.milkTypesServive.findById(id);
  }

  @Post()
  async create(@Body() createMilkDto: CreateMilkDto): Promise<MilkTypes> {
    return this.milkTypesServive.create(createMilkDto);
  }


  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<MilkTypes> {
    return this.milkTypesServive.delete(id);
  }
}
