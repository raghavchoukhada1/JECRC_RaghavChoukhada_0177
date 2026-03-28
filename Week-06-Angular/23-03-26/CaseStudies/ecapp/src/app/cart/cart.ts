import { Component } from '@angular/core';
import { CartService } from '../cart.sevice';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartService:CartService){}
  get total(){
    return this.cartService.gettotal();
  }

}
