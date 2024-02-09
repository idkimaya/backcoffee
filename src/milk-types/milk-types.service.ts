import { Injectable } from '@nestjs/common';
import { MilkTypes, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MilkTypesService {
  constructor(private readonly prisma: PrismaService) {} // Injectez PrismaService ici

  async findAll(): Promise<MilkTypes[]> {
    return this.prisma.milkTypes.findMany();
  }

  async findById(id: number): Promise<MilkTypes> {
    return this.prisma.milkTypes.findUnique({ where: { milkTypeID: id } });
  }

  async create(data: Prisma.MilkTypesCreateInput): Promise<MilkTypes> { // Utilisez le bon type d'entrée
    return this.prisma.milkTypes.create({ data });
  }

  async delete(id: number): Promise<MilkTypes> {
    return this.prisma.milkTypes.delete({ where: { milkTypeID: id } });
  }
}
