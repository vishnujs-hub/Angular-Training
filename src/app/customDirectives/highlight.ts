import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.removeClass(this.element.nativeElement, 'bgClassOut');
    this.renderer.addClass(this.element.nativeElement, 'bgClassIn');
  }
  @HostListener('mouseout') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'bgClassIn');
    this.renderer.addClass(this.element.nativeElement, 'bgClassOut');
  }
}
