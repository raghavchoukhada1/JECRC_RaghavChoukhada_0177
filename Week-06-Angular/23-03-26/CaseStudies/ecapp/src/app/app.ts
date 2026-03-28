import { Component, signal } from '@angular/core';
import { Cart } from './cart/cart';
import { ProductList } from './product-list/product-list';
import { Checkout } from './checkout/checkout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductList,Cart,Checkout],
  template:`
  <h1> ecom</h1>
  <div class ="conatainer">
  <app-product-list></app-product-list>
  <app-cart></app-cart>
  <app-checkout></app-checkout>
  </div>
  `
})
export class App {
  protected readonly title = signal('ecapp');
}
