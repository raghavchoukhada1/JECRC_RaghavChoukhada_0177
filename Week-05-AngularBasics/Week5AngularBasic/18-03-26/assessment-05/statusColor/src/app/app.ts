import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusColorDirective } from './status-color';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StatusColorDirective],
  templateUrl: './app.html'
})
export class AppComponent {

  students = [
    { name: 'Raghav', marks: 75 },
    { name: 'Aman', marks: 40 },
    { name: 'Neha', marks: 60 },
    { name: 'Rahul', marks: 30 }
  ];

}