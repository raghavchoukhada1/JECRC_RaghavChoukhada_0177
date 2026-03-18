import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showProducts=true;
  products=[
    {name:'Laptop', price:1000,status:'Available'},
    {name:'Smartphone', price:500,status:'Out of Stock'},
    {name:'Tablet', price:300,status:'limited Stock'},
  ];
}

