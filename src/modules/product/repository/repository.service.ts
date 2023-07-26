import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepositoryService {
  constructor(private readonly db: PrismaService) {}

  getProducts() {
    return this.db.product.findMany();
  }

  getProduct(id: string) {
    return this.db.product.findUniqueOrThrow({ where: { id } });
  }
}
