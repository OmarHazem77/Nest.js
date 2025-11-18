import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return this.productService.getProduct();
  }
  constructor(private productService: ProductsService){}

  @Post()
  addProducts(
    @Body('title')pTitle:string,
    @Body('description')pDesc:string,
    @Body('price')pPrice:number
  ){
    const returnedId = this.productService.insertProduct(pTitle , pDesc , pPrice);
    return {id:returnedId}
  }
}
