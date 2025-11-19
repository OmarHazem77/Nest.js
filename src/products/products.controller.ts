import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
  constructor(private productService: ProductsService) {}
  ///--------------------------------
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }
  ///----------------------------------
  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('description') pDesc: string,
    @Body('price') pPrice: number,
  ) {
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);
    return { id: returnedId };
  }
}
