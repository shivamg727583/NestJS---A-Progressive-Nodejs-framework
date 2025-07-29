import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    // url id always in string , so we use ParseIntPipe or we can use (Number(id))
    return this.productService.getProductById(id)}

}
