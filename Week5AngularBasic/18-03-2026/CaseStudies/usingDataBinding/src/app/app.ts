import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productName = 'Laptop';
  price = 1000;
  quantity = 1;
  isAvailable = true;
  imageUrl = 'https://picsum.photos/150';
  customerName = '';
  address = '';
  incrementQty() {
    this.quantity++;
  }
  decrementQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
  get totalPrice() {
    return this.price * this.quantity;
  }
}
