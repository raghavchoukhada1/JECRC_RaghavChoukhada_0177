import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickBlock]',
  standalone: true
})
export class ClickBlockDirective {

  @Input() appClickBlock: boolean = true; // true = allow, false = block

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (!this.appClickBlock) {
      event.preventDefault();
      event.stopPropagation();
      console.log('Click blocked ❌');
    }
  }
}