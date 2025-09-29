import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
//import { employees } from '../../../public/assets/fixture/employees';
import { DatePipe } from '@angular/common';
import { CardItem } from '../card-item/card-item';
import { Observable, Subscription } from 'rxjs';
import { Mockservice } from '../services/mockservice';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-list-items',
  standalone: false,
  templateUrl: './list-items.html',
  styleUrl: './list-items.css'
})
export class ListItems {
  @ViewChild('todayRef') todayRef?: ElementRef;
  @ViewChildren('component') componentRefs?: QueryList<CardItem>;


  selectedEmployee: any;
  //employees: any;
  employees$?: Observable<Employee[]>;
  subscription?: Subscription
  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  today: Date = new Date();
  tomorrow?: Date;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor(private mockService: Mockservice) {
    console.log('ListItems constructor');
    console.log(this.todayRef?.nativeElement.innerText);
  }

  ngOnInit() {
    console.log('ngOnInit');
    /*this.subscription = this.mockService.getEmployeesFromServer().subscribe(
      data => {
        this.employees = data;
      }
    )*/
    this.employees$ = this.mockService.getEmployeesFromServer();
  }

  // Pendiente de explicar
  ngAfterViewInit() {
    console.log('ListItems ngAfterViewInit -> Después de que se ha renderizado la vista del componente');
    this.tomorrow = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() + 1)), 'dd/MM/yyyy') as unknown as Date;
    console.log('tomorrow', this.tomorrow);
    console.log('componentRefs', this.componentRefs);
  } 

  onEmployeeSelected(employee: any){
    this.selectedEmployee = employee;
  }

  ngOnDestroy() {
    console.log('ListItems ngOnDestroy');
    //this.subscription?.unsubscribe();
  } 
}
