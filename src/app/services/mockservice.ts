import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Mockservice {
  constructor(private http: HttpClient) { 
    
  }
  
  employees: any;

  getEmployeesFromServer(): Observable<any>{
    return this.http.get('assets/fixture/employees.json');
    //this.employees = this.http.get('assets/fixture/employees.json');
  }

  /*getEmployees(): any{
    return this.employees;
  }

  setEmployees(employees: any): void{
    this.employees = employees;
  }*/

}
