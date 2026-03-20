import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-orderchild',
  standalone: true,                // ✅ ADD THIS
  imports: [CommonModule],         // ✅ ADD THIS
  templateUrl: './orderchild.html',
  styleUrl: './orderchild.css'
})
export class Orderchild implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() orderData: any;

  logs: string[] = [];
  private readonly maxLogs = 50;

  log(message: string) {
    this.logs.push(`${new Date().toLocaleTimeString()} - ${message}`);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges called');
  }

  ngOnInit() {
    this.log('ngOnInit called');
  }

  ngDoCheck() {
    this.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy called');
  }
}