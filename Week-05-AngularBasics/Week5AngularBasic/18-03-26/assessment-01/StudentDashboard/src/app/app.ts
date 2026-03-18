import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'student-dashboard-app';
  students = [
    { name: 'Rahul', marks: 95 },
    { name: 'ABC', marks: 76 },
    { name: 'Priya', marks: 88 },
    { name: 'BCD', marks: 33 }
  ];

}
