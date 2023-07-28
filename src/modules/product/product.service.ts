import { Injectable } from '@nestjs/common';
import { Product, Vendor } from '@prisma/client';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class ProductService {
  constructor(private readonly repositoryService: RepositoryService) {}

  getProducts(): Promise<Product[]> {
    return this.repositoryService.getProducts();
  }

  getProduct(slug: string): Promise<Product> {
    return this.repositoryService.getProduct(slug);
  }

  getProductsByVendor(vendorId: string): Promise<Product[]> {
    return this.repositoryService.getProductsByVendor(vendorId);
  }

  getProductVendors(): Promise<Vendor[]> {
    return this.repositoryService.getProductVendors();
  }
}
