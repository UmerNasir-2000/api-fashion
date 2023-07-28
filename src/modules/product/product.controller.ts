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

  @Get(':slug')
  getProduct(@Param('slug', ValidateSlugPipe) slug: string) {
    return this.productService.getProduct(slug);
  }

  @Get('vendor/:id')
  getProductsByVendor(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.getProductsByVendor(id);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
}

// TODO: Add the following to endpoints

/**
 *
 * 1. GET /product/ ✅ (Partially)
 * 2. GET /product/:id ✅
 * 3. GET /product/:slug ✅
 * 4. GET /product/vendors ✅
 * 5. GET /product/vendors/:id ✅
 * 6. GET /product/vendors/:slug ✅
 * 7. GET /product/fabric/
 * 8. GET /product/fabric/:slug
 *
 */
