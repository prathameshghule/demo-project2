import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Model/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // employees?:Employee[];
  employee$?:Observable<Employee[]>;
  
 constructor(private employeeService:EmployeeService){
 
 }
  ngOnInit(): void {
    // debugger;
    this.employee$=this.employeeService.getAllEmployee();
    // .subscribe({
    //   next:(response)=>{
    //   this.employees=response;
    //   }
    // });
  }

}
