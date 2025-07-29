import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'mobile', price: 20000 },
    { id: 2, name: 'laptop', price: 30000 },
    { id: 3, name: 'tv', price: 40000 },
    { id: 4, name: 'watch', price: 50000 },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    return product;
  }

  
}
