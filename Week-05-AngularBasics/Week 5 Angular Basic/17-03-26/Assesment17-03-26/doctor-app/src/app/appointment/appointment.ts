import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.html',
})
export class AppointmentComponent {

  patientName = '';
  doctor = '';
  date = '';
  type = '';
  symptoms = '';

  fee = 0;
  message = '';

  doctors = ['Dr. Sharma', 'Dr. Mehta', 'Dr. Gupta'];

  calculateFee() {
    this.fee = this.type === 'Online' ? 300 : 500;
  }

  submit() {
    this.message = "Appointment Confirmed!";
  }

  today() {
    return new Date().toISOString().split('T')[0];
  }
}
