import { Component } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Theme],
  templateUrl: './app.html'
})
export class App {

  mode = 'light'; // default
}