import { Injectable } from '@nestjs/common';
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

  async getProductVendors(): Promise<string[]> {
    const vendors = await this.repositoryService.getProductVendors();
    return [];
  }
}
