import { Injectable } from '@angular/core';
import { AddEmployeeRequest } from '../Model/add-employee-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/employee.model';

import { UpdateEmployeeRequest } from '../Model/update-employee-request.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


 addEmployee(model:AddEmployeeRequest):Observable<void> {
 return this.http.post<void>(`${environment.apiBaseUrl}/api/Employee`,model)
 }
 getAllEmployee():Observable<Employee[]>{
  return this.http.get<Employee[]>(`${environment.apiBaseUrl}/api/Employee`);
  }
  getEmployeeByEmpId(EmpId: string):Observable<Employee>{
    return this.http.get<Employee>(`${environment.apiBaseUrl}/api/Employee/${EmpId}`);

  }
  updateEmployee(EmpId:string,updateEmployeeRequest:UpdateEmployeeRequest):Observable<Employee>{
    return this.http.put<Employee>(`${environment.apiBaseUrl}/api/Employee/${EmpId}`,updateEmployeeRequest)
  }
  deleteEmployee(EmpId:string):Observable<Employee>{
   return this.http.delete<Employee>(`${environment.apiBaseUrl}/api/Employee/${EmpId}`)
  }

  }
