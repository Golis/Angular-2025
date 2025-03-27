import { Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
//import { employees } from '../../../public/assets/fixtures/employees';
import { Employee } from '../../models/employee';
import { DatePipe } from '@angular/common';
import { CarditemsComponent } from '../carditems/carditems.component';
import { MockserviceService } from '../services/mockservice.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-listitems',
  standalone: false,
  templateUrl: './listitems.component.html',
  styleUrl: './listitems.component.css',
})
export class ListitemsComponent{
  @ViewChild ('todayRef') todayRef?: ElementRef

  @ViewChildren ('component') employeesRef!: QueryList<CarditemsComponent>;

  /*firstEmployee = employees[0];
  secondEmployee = employees[1];
  thirdEmployee = employees[2];
  fourthEmployee = employees[3];*/

  selectedEmployee: Employee;

  //employees: any = employees;
  //employees: any;
  employees$?: Observable<Employee[]>;
  today = new Date();
  tomorrow?:any;
  datepipe: DatePipe = new DatePipe('en-US')
  subscription?: Subscription;
  // El constructor se instancia ANTES de renderizar el html
  constructor(private mockService: MockserviceService){
    this.selectedEmployee = new Employee();
    console.log('constructor');
    console.log(this.todayRef?.nativeElement.innerText);
  }

  // Buen lugar para conectar con el backend. Primer método de Angular en ser instanciado en el ciclo de vida
  ngOnInit(){
    console.log('ngOnInit');
    this.employees$ = this.mockService.getEmployeesFromServer();
    /*this.subscription = this.mockService.getEmployeesFromServer().subscribe(
      data=>{
        this.employees = data;
      }
    );*/
  }

  // Buen lugar para acceder al DOM / html y hacer lo que necesitemos
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log(this.todayRef?.nativeElement.innerText);
    this.tomorrow = this.datepipe.transform(new Date(this.today.setDate(this.today.getDate() +1)), 'dd/MM/YYYY');
    console.log('tomorrow');
    console.log(this.tomorrow);
    console.log('employeesRef');
    console.log(this.employeesRef);
  }

  onEmployeeSelected(employee: Employee){
    this.selectedEmployee = employee;
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    /*if(this.subscription){
      this.subscription.unsubscribe();
    }*/
  }
}
