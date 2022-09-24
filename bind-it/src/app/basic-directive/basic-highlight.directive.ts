import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.padding = '30px';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.border = '3px solid yellow';
    }

    ngOnInit(): void {
        
    }
}