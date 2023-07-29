import { Injectable } from '@nestjs/common';
import { Product, Vendor } from '@prisma/client';
import PaginationModel from 'src/common/models/pagination.model';
import ProductPreviewModel from './models/product.preview.model';
import { RepositoryService } from './repository/repository.service';

// FIXME: Import issues

@Injectable()
export class ProductService {
  constructor(private readonly repositoryService: RepositoryService) {}

  async getProducts(): Promise<PaginationModel<ProductPreviewModel>> {
    const products = await this.repositoryService.getProducts();
    return new PaginationModel({
      count: 100,
      pages: 10,
      records: products.map((product) => new ProductPreviewModel(product)),
    });
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
