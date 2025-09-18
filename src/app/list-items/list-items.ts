import { Component } from '@angular/core';
import { employees } from '../../../public/assets/fixture/employees';

@Component({
  selector: 'app-list-items',
  standalone: false,
  templateUrl: './list-items.html',
  styleUrl: './list-items.css'
})
export class ListItems {
  selectedEmployee: any;
  employees = employees;
  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  onEmployeeSelected(employee: any){
    this.selectedEmployee = employee;
  }
}
