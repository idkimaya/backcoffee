import { Injectable } from '@nestjs/common';
import { Flavors, Prisma } from '@prisma/client'; 
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlavorsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Flavors[]> {
    return this.prisma.flavors.findMany();
  }

  async findById(id: number): Promise<Flavors> {
    return this.prisma.flavors.findUnique({ where: { flavorID: id } });
  }

  async create(data: Prisma.FlavorsCreateInput): Promise<Flavors> { 
    return this.prisma.flavors.create({ data });
  }

  async delete(id: number): Promise<Flavors> {
    return this.prisma.flavors.delete({ where: { flavorID: id } });
  }
}
