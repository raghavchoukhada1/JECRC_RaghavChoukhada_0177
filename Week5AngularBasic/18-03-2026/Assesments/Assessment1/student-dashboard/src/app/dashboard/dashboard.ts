import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  students = [
    { name: 'Raghav', marks: 85 },
    { name: 'Aman', marks: 45 },
    { name: 'Neha', marks: 72 },
    { name: 'Priya', marks: 30 },
    { name: 'Karan', marks: 90 }
  ];

  getGrade(marks: number): string {
    switch (true) {
      case marks >= 80: return 'A';
      case marks >= 60: return 'B';
      case marks >= 40: return 'C';
      default: return 'F';
    }
  }
}