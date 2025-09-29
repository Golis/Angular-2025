import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]',
  standalone: false
})
export class NgxUnless {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  visible = false;
  @Input()
  set appNgxUnless(condition: boolean) {  
    if (!condition && !this.visible ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;  
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
