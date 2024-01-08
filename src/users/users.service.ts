import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users } from '.prisma/client';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';



@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async findById(id: number): Promise<Users> {
    return this.prisma.users.findUnique({ where: { userID: id } });
  }

  async create(data: CreateUsersDto): Promise<Users> {
    return this.prisma.users.create({ data });
  }

  async update(id: number, data: UpdateUsersDto): Promise<Users> {
    return this.prisma.users.update({ where: { userID: id }, data });
  }

  async delete(id: number): Promise<Users> {
    return this.prisma.users.delete({ where: { userID: id } });
  }
}
