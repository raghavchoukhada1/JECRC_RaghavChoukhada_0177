import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html'
})
export class CheckoutComponent {

  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),

    gender: new FormControl('male'),
    deliveryType: new FormControl('standard'),

    terms: new FormControl(false),
    subscribe: new FormControl(false),

    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),

    deliveryDate: new FormControl(''),
    instructions: new FormControl(''),

    payment: new FormControl('card'),

    cardNumber: new FormControl(''),
    expiry: new FormControl(''),
    cvv: new FormControl(''),

    upiId: new FormControl(''),

    addresses: new FormArray<FormControl>([
      new FormControl('')
    ])
  });

  get addresses() {
    return this.form.get('addresses') as FormArray<FormControl>;
  }

  addAddress() {
    this.addresses.push(new FormControl(''));
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }

  submit() {
    console.log(this.form.value);
    alert(JSON.stringify(this.form.value, null, 2));
  }
}