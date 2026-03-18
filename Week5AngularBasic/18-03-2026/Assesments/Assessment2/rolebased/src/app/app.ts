import { Component } from '@angular/core';
import { RoleBased } from './role-based';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoleBased],
  templateUrl: './app.html'
})
export class App {}