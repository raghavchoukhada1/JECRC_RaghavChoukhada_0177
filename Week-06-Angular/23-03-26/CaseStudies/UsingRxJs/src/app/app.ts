import { Component } from '@angular/core';
import { RxJsDemo } from './rx-js-demo/rx-js-demo'; // path check kar lena

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RxJsDemo],
  templateUrl: './app.html',
})
export class AppComponent {}