import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ yaha bhi
  templateUrl: './taskform.html',
  styleUrls: ['./taskform.css']
})
export class Taskform {
  title: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (!this.title.trim()) return;

    this.taskService.addTask({
      id: 0,
      title: this.title,
      completed: false
    }).subscribe(() => {
      this.title = '';
    });
  }
}