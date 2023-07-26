import { Injectable } from '@nestjs/common';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class ProductService {
  constructor(private readonly repositoryService: RepositoryService) {}

  getProducts() {
    return this.repositoryService.getProducts();
  }

  getProduct(id: string) {
    return this.repositoryService.getProduct(id);
  }
}
