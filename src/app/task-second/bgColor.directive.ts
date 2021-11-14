import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
})
export class BgColorDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.change();
  }

  change() {
    this.eleRef.nativeElement.style.backgroundColor = 'green';
  }
}
