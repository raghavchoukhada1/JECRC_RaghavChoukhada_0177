import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ThemeDirective],
  templateUrl: './app.html'
})
export class AppComponent {

  currentTheme = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }

}