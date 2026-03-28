import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems:any[]=[];
addToCart(product:Product){
  const item=this.cartItems.find(i=>i.product.productID===product.productID);
  if(item){
    item.quantity++;
  }
  else{
    this.cartItems.push({ ...product,quantity:1});
  }
}
removeFromCart(index:number){
  this.cartItems.splice(index,1);
}
getCartItems(){
  return this.cartItems;
}
gettotal(){
   return this.cartItems.reduce((total,items)=>
  total+items.price*items.quantity,0);
}

}
