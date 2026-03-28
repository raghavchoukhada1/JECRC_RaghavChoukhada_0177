import { Component } from '@angular/core';
import { Taskform } from './taskform/taskform';
import { Tasklist } from './tasklist/tasklist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Taskform, Tasklist], // 👈 yaha components add kar
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'Task Management';
}