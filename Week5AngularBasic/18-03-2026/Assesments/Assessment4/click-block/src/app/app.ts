import { Component } from '@angular/core';
import { ClickBlock } from './click-block';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickBlock],
  templateUrl: './app.html'
})
export class App {

  allowClick = false; // 👈 toggle kar
}