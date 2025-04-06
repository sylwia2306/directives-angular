import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[changeBackground]'
})
export class HighlightDirective {
    @Input() color: string = 'blue';
    @Input() size: number = 1;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color)
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.renderer.removeStyle(this.element.nativeElement, 'background-color')
    }

    @HostBinding('class.activeElement') isActive = this.check();
    check(): boolean {
        return false;
    }
}