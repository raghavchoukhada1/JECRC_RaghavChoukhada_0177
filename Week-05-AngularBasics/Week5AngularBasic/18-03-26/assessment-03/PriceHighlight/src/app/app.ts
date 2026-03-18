import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceHighlightDirective } from './price-highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PriceHighlightDirective],
  templateUrl: './app.html'
})
export class AppComponent {

  products = [
    { name: 'Laptop', price: 70000 },
    { name: 'Mobile', price: 20000 },
    { name: 'TV', price: 55000 },
    { name: 'Mouse', price: 500 }
  ];

}