import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../../services/transaction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-record-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './record-table.html',
  styleUrls: ['./record-table.css']
})
export class RecordTableComponent implements OnInit {

  transactions: Transaction[] = [];
  selectedDate: string = '';

  constructor(private service: TransactionService) {}

  ngOnInit() {
    this.loadData();
  }
  onDateChange() {
  if (!this.selectedDate) {
    this.loadData();
  }
}

  loadData() {
    this.service.getAll().subscribe(res => {
      this.transactions = res;
    });
  }
filter() {
  if (!this.selectedDate) {
    // agar date empty hai → sab data load karo
    this.loadData();
    return;
  }

  this.service.filter(this.selectedDate).subscribe(data => {
    this.transactions = data;
  });
}

  sort() {
    this.transactions = [...this.transactions].sort((a, b) => a.amount - b.amount);
  }
}