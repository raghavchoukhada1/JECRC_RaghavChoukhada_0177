import { Component } from '@angular/core';
import { RoleBasedDirective } from './role-based';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoleBasedDirective],   // ✅ IMPORTANT
  templateUrl: './app.html'
})
export class AppComponent { }
