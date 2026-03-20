import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product';
import { CartComponent } from './components/cart/cart';
import { CheckoutComponent } from './components/checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, CartComponent, CheckoutComponent],
  templateUrl: './app.html'
})
export class App {

  cart: any[] = [];

  // receive cart data from product
  updateCart(data: any[]) {
    this.cart = data;
  }
}