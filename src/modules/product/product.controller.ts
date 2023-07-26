import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('vendors')
  getProductVendors() {
    return this.productService.getProductVendors();
  }

  @Get(':id')
  getProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.getProduct(id);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
