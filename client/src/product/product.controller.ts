import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: number) {
    return await this.productService.getOneProduct(id);
  }

  @EventPattern('product_created')
  async createProduct(product) {
    await this.productService.createProduct({
      id: product.id,
      title: product.title,
      likes: product.likes,
      image: product.image,
    });
  }

  @EventPattern('product_updated')
  async updateProduct(product) {
    await this.productService.updateProduct(product.id, {
      id: product.id,
      title: product.title,
      likes: product.likes,
      image: product.image,
    });
  }

  @EventPattern('product_deleted')
  async deleteProduct(id) {
    await this.productService.deleteProduct(id);
  }
}
