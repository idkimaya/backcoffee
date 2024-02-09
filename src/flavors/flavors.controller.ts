import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post,  } from '@nestjs/common';
import { Flavors } from '@prisma/client';
import { FlavorsService } from './flavors.service'
import { CreateFlavorDto } from './dto/create-flavor-dto';


@Controller('flavors')
export class FlavorsController {
    constructor(private readonly FlavorsService: FlavorsService) {}

  @Get()
  async findAll(): Promise<Flavors[]> {
    return this.FlavorsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Flavors> {
    return this.FlavorsService.findById(id);
  }

  @Post()
  async create(@Body() createflavorDto: CreateFlavorDto): Promise<Flavors> {
    return this.FlavorsService.create(createflavorDto);
  }


  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Flavors> {
    return this.FlavorsService.delete(id);
  }
}
