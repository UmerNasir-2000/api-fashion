import { Injectable } from '@nestjs/common';
import { Product, Vendor } from '@prisma/client';
import ProductPreviewModel from './models/product.preview.model';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class ProductService {
  constructor(private readonly repositoryService: RepositoryService) {}

  getProducts(): Promise<Product[]> {
    return this.repositoryService.getProducts();
  }

  async getProduct(slug: string): Promise<ProductPreviewModel> {
    const product = await this.repositoryService.getProduct(slug);
    return new ProductPreviewModel(product);
  }

  getProductsByVendor(vendorId: string): Promise<Product[]> {
    return this.repositoryService.getProductsByVendor(vendorId);
  }

  getProductVendors(): Promise<Vendor[]> {
    return this.repositoryService.getProductVendors();
  }
}
