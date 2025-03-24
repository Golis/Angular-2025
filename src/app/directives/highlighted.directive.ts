import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: false
})
export class HighlightedDirective {

  constructor() { 

    console.log('Directiva instanciada');

  }

}
