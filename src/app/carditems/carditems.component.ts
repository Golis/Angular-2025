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

  ngAfterContentInit(){
    console.log('Contenido del employeeContent1');
    console.log(this.employeeContent1);
  }

}
