import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private httpService:HttpService
  ) {}

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: number) {
    return await this.productService.getOneProduct(id);
  }

  @Post(':id/like')
  async likeProduct(@Param('id') id: number) {
    const product = await this.productService.getOneProduct(id);

    this.httpService.post(`http://localhost:5000/api/products/${id}/like`,{}).subscribe(res=>{
      console.log(res);
    })
    const likes= 
    this.productService.updateProduct(id, {
      likes:Number.parseInt(product.likes) + 1,
    });
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
