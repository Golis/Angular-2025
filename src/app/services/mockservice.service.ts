import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockserviceService {
  constructor(private http: HttpClient) { }
  countries:any;

  getEmployeesFromServer(): Observable<any>{
    return this.http.get('../assets/fixtures/employees.json');
  }

  getCountriesFromServer(){
    this.countries =  this.http.get('../assets/fixtures/employees.json');
  }
  
  getCountries(){
    return this.countries;
  }
}
