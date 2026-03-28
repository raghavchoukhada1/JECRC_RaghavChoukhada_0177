import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../core/services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: 
  `<h2>Login</h2>
  <input [(ngModel)] = "username" placeholder="Username">
  <input [(ngModel)] = "password" type="password" placeholder="password">
  <br><br>
  <button (click)="login()">Login</button>

  `
})
export class Login {
  username = '';
  password = '';

  constructor(private auth: Auth, private router: Router)
  {}
    login(){
      if(this.auth.login(this.username, this.password)){
        this.router.navigate(['/employees']);
      }
      else
      {
        alert('Invalid Credentials');
      }
    }

}