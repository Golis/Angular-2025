import { Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: false,
  templateUrl: './card-item.html',
  styleUrl: './card-item.css'
})
export class CardItem{
  @Input() childEmployee: any;
  @Output() employeeSelected = new EventEmitter<void>();
  @ContentChild('employeeContent1') employeeContent1?: any;

  constructor() {
    console.log('CardItem constructor -> Primero en ejecutarse');
    console.log(this.childEmployee);
  }

  // Se ejecuta una sola vez al inicio del componente y es un buen lugar para conectar con el API externo
  ngOnInit() {
    console.log('CardItem ngOnInit -> Segundo en ejecutarse');
    console.log(this.childEmployee);
  }
 
  // Spy -> me permite ver los cambios de cualquier variable de la clase typecript
  ngOnChanges(changes: any) {
    console.log('CardItem ngOnChanges -> Cada vez que una propiedad @Input cambia de valor', changes);
  }

  // Me sirve para hacer una detección de cambios a mano en vez de tener el sistema de gestión de cambios automático de Angular
  ngDoCheck() {
    console.log('CardItem ngDoCheck -> Cada vez que Angular hace la detección de cambios');
  } 

  // Me sirve para acceder al contenido proyectado desde el padre en el component hijo. Es el primer lugar en el que tengo acceso a este contenido
  ngAfterContentInit() {
    console.log('CardItem ngAfterContentInit -> Después de que se ha renderizado la vista del componente');
    console.log(this.employeeContent1);
  }

  // Sirve para hacer una gestión de cambios a mano del contenido proyectado
  ngContentChecked() {
  }

  // Me sirve para acceder al html una vez ha sido renderizado
  ngAfterViewInit() {
    console.log('CardItem ngAfterViewInit -> Después de que se ha renderizado la vista del componente');
  } 

  // Sirve para hacer una gestión de cambios a mano de la vista del componente en el que nos encontramos
  ngAfterViewChecked() {

  }

  // Se ejecuta una sola vez al final del ciclo de vida del componente y es un buen lugar para desconectar del API externo
  ngOnDestroy() {
    console.log('CardItem ngOnDestroy -> Justo antes de que Angular destruya el componente');
  }

  onEmployeeSelected(){
    this.employeeSelected.emit(this.childEmployee);
  }

  onCheckRank(rank: string){
      if(rank === 'junior'){
        return { 'text-decoration': 'underline', 'color': 'blue' };
      } else{
        return null;
      }
  }
}
