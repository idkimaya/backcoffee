import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffees.dto';
import { UpdateCoffeeDto } from './dto/update-coffees.dto';


@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  //rajouter @UseGuard pour limiter l'accer au CRUD juste l'admin pour le faire
  @Get()
  async getAllCoffees() {
    return this.coffeesService.findAll();
  }
  @Get(':id')
  async getCoffeeById(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findById(id);
  }

  @Post()
  async createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Put(':id')
  async updateCoffee(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  //ParseIntPipe lien pour résoudre le probleme de id en tant que number transformer en string
  @Delete(':id')
  async deleteCoffee(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.delete(id);
  }
}

