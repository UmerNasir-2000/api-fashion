import { Injectable } from '@nestjs/common';
import { Product, Vendor } from '@prisma/client';
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

  getProductVendors(): Promise<Vendor[]> {
    return this.db.vendor.findMany({
      include: { products: { take: 10 } },
      orderBy: { title: 'asc' },
    });
  }
}
