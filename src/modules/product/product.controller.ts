import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import ValidateSlugPipe from 'src/pipes/slug.pipe';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('vendors')
  getProductVendors() {
    return this.productService.getProductVendors();
  }

  @Get('vendor/:id')
  getProductsByVendor(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.getProductsByVendor(id);
  }

  @Get(':slug')
  getProduct(@Param('slug', ValidateSlugPipe) slug: string) {
    return this.productService.getProduct(slug);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}
