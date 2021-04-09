import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[appBetterHighLight]'
})

export class BetterHighLight implements OnInit {
    @HostBinding('style.color') color: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }
    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
    }
    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue', false, false);
        this.color = 'blue'
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red', false, false);
        this.color = 'red'
    }
}