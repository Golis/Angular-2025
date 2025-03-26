import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLimitChars]',
  standalone: false
})
export class LimitCharsDirective {
  @Input() appLimitChars: any;

  constructor(private el: ElementRef) {}
  
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const input: HTMLInputElement = this.el.nativeElement;
    const currentLength = input.value.length;

    if (currentLength >= this.appLimitChars && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  }
}
