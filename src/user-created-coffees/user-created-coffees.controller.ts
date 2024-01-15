import { Controller, Get, Post, Delete, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import {UserCreatedCoffeesService} from './user-created-coffees.service';
import { CreateUserCreatedCoffeeDto } from './dto/create-user-created-coffee.dto';
import { UpdateUserCreatedCoffeeDto } from './dto/update-user-created-coffee.dto';


@Controller('user-created-coffees')
export class UserCreatedCoffeesController {
    constructor (private readonly UserCreatedCoffeesService: UserCreatedCoffeesService) {}

    @Get()
    async getAllUserCreatedCoffees() {
      return this.UserCreatedCoffeesService.findAll();
    }
    @Get(':id')
    async getUserCreatedCoffeesById(@Param('id', ParseIntPipe) id: number) {
      return this.UserCreatedCoffeesService.findById(id);
    }
  
    @Post()
    async createUserCreatedCoffees(@Body() CreateUserCreatedCoffeeDto: CreateUserCreatedCoffeeDto) {
      return this.UserCreatedCoffeesService.create(CreateUserCreatedCoffeeDto);
    }
  
    @Put(':id')
    async updateUserCreatedCoffees(
      @Param('id', ParseIntPipe) id: number,
      @Body() UpdateUserCreatedCoffeeDto: UpdateUserCreatedCoffeeDto,
    ) {
      return this.UserCreatedCoffeesService.update(id, UpdateUserCreatedCoffeeDto);
    }
  
    //ParseIntPipe est utilisé pour le paramètre id de la route, ce qui garantit que id est un nombre.
    @Delete(':id')
    async deleteUserCreatedCoffees(@Param('id', ParseIntPipe) id: number) {
      return this.UserCreatedCoffeesService.delete(id);
    }
}
