import { Component } from '@angular/core';
import { RecordTableComponent } from './components/record-table/record-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecordTableComponent],
  template: `<app-record-table></app-record-table>`
})
export class AppComponent {}