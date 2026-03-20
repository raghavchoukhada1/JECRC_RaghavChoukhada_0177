import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html'
})
export class Product {

  @Output() cartChange = new EventEmitter<any[]>();   // ✅ ADD THIS

  products = [
    { id: 1, name: 'Laptop', price: 50000, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 20000, category: 'Electronics' },
    { id: 3, name: 'Shoes', price: 3000, category: 'Fashion' }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.qty++;
    } else {
      this.cart.push({ ...product, qty: 1 });
    }

    this.cartChange.emit(this.cart);   // ✅ VERY IMPORTANT
  }
}