import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, productDocument } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product.name')
    private readonly productModel: Model<productDocument>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getOneProduct(id:number):Promise<Product>{
    return this.productModel.findOne({id}).exec()
  }

  async createProduct(product:any): Promise<Product> {
    return new this.productModel(product).save();
  }

  async updateProduct(id:number, product:any): Promise<Product> {
    return this.productModel.findOneAndUpdate({ id }, product);
  }

  async deleteProduct(id:number) {
     await this.productModel.deleteOne({ id });
  }
}
