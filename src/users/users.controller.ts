import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '.prisma/client';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto): Promise<Users> {
    return this.usersService.create(createUsersDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUsersDto: UpdateUsersDto): Promise<Users> {
    return this.usersService.update(id, updateUsersDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return this.usersService.delete(id);
  }
}

