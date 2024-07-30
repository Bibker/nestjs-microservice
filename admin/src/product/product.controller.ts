import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(":id")
  async getOneProduct(@Param('id') id: number) {
    return this.productService.getOneProduct(id);
  }

  @Post()
  async createProduct(
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    return this.productService.createProduct({
      title,
      image,
    });
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id:number,
    @Body('title') title:string,
    @Body('image') image:string
  ){
    return this.productService.updateProduct(id, {title, image})
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id:number){
    return this.productService.deleteProduct(id);
  }
}
