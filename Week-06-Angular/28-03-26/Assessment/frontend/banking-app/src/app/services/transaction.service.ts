import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  date: string;
  description: string;
  type: number;
  amount: number;
  balance: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:5049/api/transaction';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  filter(date: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/filter?date=${date}`);
  }

  sort(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/sort`);
  }
}