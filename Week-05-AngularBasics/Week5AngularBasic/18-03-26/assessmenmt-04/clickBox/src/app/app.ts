import { Component } from '@angular/core';
import { ClickBlockDirective } from './click-block';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickBlockDirective],
  templateUrl: './app.html'
})
export class AppComponent {

  allowClick = false; // change true/false to test

  handleClick() {
    alert('Button Clicked ✅');
  }

}