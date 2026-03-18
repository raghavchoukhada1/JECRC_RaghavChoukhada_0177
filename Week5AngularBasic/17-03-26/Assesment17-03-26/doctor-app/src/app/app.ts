import { Component } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppointmentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}