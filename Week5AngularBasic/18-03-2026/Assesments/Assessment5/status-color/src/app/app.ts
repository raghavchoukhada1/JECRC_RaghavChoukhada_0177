import { Component } from '@angular/core';
import { StatusColor } from './status-color';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusColor],
  templateUrl: './app.html'
})
export class App {}