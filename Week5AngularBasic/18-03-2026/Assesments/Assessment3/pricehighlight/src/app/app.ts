import { Component } from '@angular/core';
import { PriceHighlight } from './price-highlight';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PriceHighlight],
  templateUrl: './app.html'
})
export class App {}