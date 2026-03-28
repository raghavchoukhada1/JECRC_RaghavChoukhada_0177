import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasklist',
  standalone: true, // ⚠️ important
  imports: [CommonModule], // ✅ yaha add kar
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class Tasklist implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleStatus(task: Task) {
  if (task.id !== undefined) {
  this.taskService.updateTaskStatus(task.id, !task.completed)
    .subscribe(() => this.loadTasks());
}
  }
}