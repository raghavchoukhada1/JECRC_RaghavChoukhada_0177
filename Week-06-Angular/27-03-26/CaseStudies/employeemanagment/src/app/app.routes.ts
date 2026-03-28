import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { EmployeeListComponent } from './employee/employeelist/employeelist'; // adjust path if needed
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },

  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];