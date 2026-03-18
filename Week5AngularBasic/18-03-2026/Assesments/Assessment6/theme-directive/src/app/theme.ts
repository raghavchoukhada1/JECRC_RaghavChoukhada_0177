import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class Theme implements OnChanges {

  @Input() appTheme!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appTheme === 'dark') {
      this.el.nativeElement.style.backgroundColor = 'black';
      this.el.nativeElement.style.color = 'white';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = 'black';
    }
  }
}