import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepositoryService {
  constructor(private readonly db: PrismaService) {}

  getProducts(): Promise<Product[]> {
    return this.db.product.findMany();
  }

  getProduct(slug: string): Promise<Product> {
    return this.db.product.findFirstOrThrow({
      where: {
        OR: [
          {
            id: {
              equals: slug,
            },
          },
          { slug: { equals: slug } },
        ],
      },
    });
  }

  getProductVendors() {
    return this.db.product.groupBy({
      by: ['vendorId'],
      take: 6,
      orderBy: { vendorId: 'asc' },
    });
  }
}
