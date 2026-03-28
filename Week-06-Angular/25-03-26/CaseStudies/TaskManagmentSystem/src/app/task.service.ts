import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
private api = "http://localhost:3000/tasks";; // https ❌ → http ✅ (json-server)

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  getTaskbyId(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.api}/${id}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.api, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${task.id}`, task);
  }

  updateTaskStatus(id: number, completed: boolean): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, { completed });
  }

  updatePartial(id: number, data: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${this.api}/${id}`, data);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  searchTask(term: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}?title_like=${term}`);
  }
}