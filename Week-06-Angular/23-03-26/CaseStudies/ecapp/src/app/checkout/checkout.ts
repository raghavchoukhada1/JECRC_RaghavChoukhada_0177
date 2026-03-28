import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule,FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  form={
    name : '',
    email : '',
    address : '',
    payment : ''
  };
  submit(){
    alert('Order places');
    console.log(this.form);
    
  }
}
