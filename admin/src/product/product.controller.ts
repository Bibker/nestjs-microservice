import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: number) {
    return this.productService.getOneProduct(id);
  }

  @Post()
  async createProduct(
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    const product = await this.productService.createProduct({
      title,
      image,
    });
    this.client.emit('product_created', product);
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    await this.productService.updateProduct(id, { title, image });
    const product = await this.productService.getOneProduct(id);
    this.client.emit('product_updated', product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    await this.productService.deleteProduct(id);
    this.client.emit('product_deleted', id);
  }
}
