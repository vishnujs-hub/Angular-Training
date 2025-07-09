import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Customcolor]',
  standalone: false,
})
export class Customcolor implements OnInit {
  colors: string[] = ['green', 'blue', 'purple', 'orange'];
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
  private setStyle(color: string): void {
    const actualColor = this.colors.includes(color) ? color : 'red';
    this.renderer.setStyle(this.element.nativeElement, 'color', actualColor);
  }
  ngOnInit() {
    this.setStyle(this.element.nativeElement.style.color);
  }
}
