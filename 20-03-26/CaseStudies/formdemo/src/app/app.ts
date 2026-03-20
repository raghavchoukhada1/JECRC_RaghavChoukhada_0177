import { Component } from '@angular/core';
import { Feedbackform } from './feedbackform/feedbackform';
import { CommonModule } from '@angular/common';
import { Employeeforms } from './employeeforms/employeeforms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Feedbackform, CommonModule, Employeeforms],
  template: `

    <div style="flex:1; min-width:300px; border:1px solid #ccc; padding:10px;">
        <h2>Employee Form</h2>
        <app-feedbackform></app-feedbackform>
      </div>
    
    <h1 style="text-align:center;">Angular 21 Template-driven Demo</h1>
    
    <div>
      <h1 style="text-align:center;">Angular 21 Template-driven Demo</h1>
      <div style="flex:1; min-width:300px; border:1px solid #ccc; padding:10px;">
        <h2>Employee Feedback</h2>
        <app-feedbackform></app-feedbackform>
      </div>
    </div>

    
  `
})
export class AppComponent {
  title = 'form-demo';
  
}