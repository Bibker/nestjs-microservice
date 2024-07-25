import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getOneProduct(id: number): Promise<Product> {
    return this.productRepository.findOne({});
  }

  async createProduct(data): Promise<Product> {
    return this.productRepository.save(data);
  }

  async updateProduct(id: number, data): Promise<any> {
    return this.productRepository.update(id, data);
  }

  async deleteProduct(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
