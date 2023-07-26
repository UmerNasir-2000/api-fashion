import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepositoryService {
  constructor(private readonly db: PrismaService) {}

  getProducts(): Promise<Product[]> {
    return this.db.product.findMany();
  }

  getProduct(id: string): Promise<Product> {
    return this.db.product.findUniqueOrThrow({ where: { id } });
  }

  getProductVendors() {
    return this.db.product.groupBy({
      by: ['vendor'],
      take: 6,
      orderBy: { vendor: 'asc' },
    });
  }
}
