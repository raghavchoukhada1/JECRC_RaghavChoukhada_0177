import { Component, signal } from '@angular/core';
import { of } from 'rxjs';
import { PipesPipe } from './pipes-pipe';
import { Pipe } from '@angular/core';
import { AsyncPipe,CommonModule,KeyValuePipe ,DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ AsyncPipe, CommonModule, DatePipe, KeyValuePipe, PipesPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   today =new Date();
   data$=of([{
    id : 1,
    name : 'Laptop',
    price : 1000,
    status :  'Deliever'
   },
  {
    id : 2,
    name : 'Mobile',
    price : 500,
    status :  'Pending'
   }]);
   products = {
    name : 'Laptop',
    price : 1000,
   };
}
