import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts():Product[]{
    return[
     new Product(1,"laptop",999.99),
     new Product(2,"phone",999.99),
     new Product(3,"Tab",999.99)
    ];
  }
}
