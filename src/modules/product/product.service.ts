import { Injectable } from '@nestjs/common';
import { Vendor } from '@prisma/client';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class ProductService {
  constructor(private readonly repositoryService: RepositoryService) {}

  getProducts() {
    return this.repositoryService.getProducts();
  }

  getProduct(slug: string) {
    return this.repositoryService.getProduct(slug);
  }

  getProductVendors(): Promise<Vendor[]> {
    return this.repositoryService.getProductVendors();
  }
}
