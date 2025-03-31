import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-carditems',
  standalone: false,
  templateUrl: './carditems.component.html',
  styleUrl: './carditems.component.css'
})
export class CarditemsComponent {
  @Input() employee: any;
  @Output()
  employeeSelected = new EventEmitter<Employee>();
  @ContentChild('employeeContent1') employeeContent1:any;
  
  //Importante
  constructor(){
    console.log('constructor CarditemsComponent');
    console.log(this.employee);
  }

  //Importante
  ngOnInit(){
    console.log('ngOnInit CarditemsComponent');
    console.log(this.employee);
  }

  //Spy
  ngOnChanges(changes:any){
    console.log('ngOnChanges CarditemsComponent', changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck CarditemsComponent');
    console.log('Método que permite la detección manual de cambios')
  }

  //Importante
  ngAfterContentInit(){
    console.log('Contenido del employeeContent1');
    console.log('Buen método para trabajar con todo lo que esté relacionado con ContentChild y ContentChildren (proyeccióon de contenido)');
    console.log(this.employeeContent1);
  }

  ngContentChecked(){
    console.log('ngContentChecked CarditemsComponent');
    console.log('Spy pero del contenido proyectado');
  }

  //Importante
  ngAfterViewInit(){
    console.log('ngAfterViewInit CarditemsComponent');
    console.log('Buen método para trabajar con todo lo que esté relacionado con ViewChild y ViewChildren');
  }

  ngAfterViewChecked(){
    console.log('ngContentChecked CarditemsComponent');
    console.log('Spy pero de ViewChild y ViewChildren');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy CarditemsComponent');
    console.log('Buen método para liberar memoria de las suscripciones que hemos realizado');
  }




  onEmployeeChecked(){
    this.employeeSelected.emit(this.employee);
  }

  oncheckRank(rank: string){
    if(rank ==='senior'){
      return { 'text-decoration': 'underline' }
    } else{
      return null;
    }
  }

  

}
