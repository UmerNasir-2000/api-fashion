import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { RepositoryService } from './repository/repository.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, RepositoryService, PrismaService],
})
export class ProductModule {}
