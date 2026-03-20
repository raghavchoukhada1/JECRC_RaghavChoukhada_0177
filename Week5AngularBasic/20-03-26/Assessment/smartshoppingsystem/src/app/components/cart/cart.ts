import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html'
})
export class CartComponent {

  @Input() cart: any[] = [];

  increase(item: any) {
    item.qty++;
  }

  decrease(item: any) {
    if (item.qty > 1) item.qty--;
  }

  remove(item: any) {
    this.cart = this.cart.filter(p => p.id !== item.id);
  }

  total() {
    return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
}