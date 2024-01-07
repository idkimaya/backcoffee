import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service'
import { ConfigService } from '@nestjs/config'; // Importez ConfigService si nécessaire

@Module({
  providers: [UsersService, PrismaService, ConfigService], // Assurez-vous que ConfigService est bien fourni ici
  controllers: [UsersController],
})
export class UsersModule {}

