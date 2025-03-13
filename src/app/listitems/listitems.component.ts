import { Component } from '@angular/core';
import { employees } from '../../../public/assets/fixtures/employees';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-listitems',
  standalone: false,
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css'
})
export class ListitemsComponent {
  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  selectedEmployee: Employee;

  employees: any = employees;

  constructor(){
    this.selectedEmployee = new Employee();
  }

  onEmployeeSelected(employee: Employee){
    this.selectedEmployee = employee;
  }
}
