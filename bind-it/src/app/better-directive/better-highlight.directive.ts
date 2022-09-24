import {
  Directive,
  Renderer2,
  OnInit, 
  ElementRef, 
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'whiteSmoke';

  @HostListener('mouseenter') mouseenter(dataEvent: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(dataEvent: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent'
  }

}
