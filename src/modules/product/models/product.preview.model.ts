import { Prisma, Product } from '@prisma/client';

class ProductPreviewModel {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly images: Prisma.JsonValue;
  readonly isPopular: boolean;
  readonly inStock: boolean;
  readonly price: number;

  constructor(data: Product) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.images = data.images;
    this.isPopular = data.isPopular;
    this.inStock = data.inStock;
    this.price = data.price.toNumber();
  }
}

export default ProductPreviewModel;
