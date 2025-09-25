import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: false
})
export class Highlighted {

  @Input('appHighlighted')
  isHighlighted = false;
  constructor() { 
    console.log('Esto es mi nueva directiva');
  }

  /*@HostBinding('className')
  get cssClasses()
  { 
    return 'highlighted';
  }*/

  @HostBinding('class.highlighted') 
  get cssClasses(){
    return this.isHighlighted;
  }
}