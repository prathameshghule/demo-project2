import { Component, OnDestroy } from '@angular/core';
import { AddEmployeeRequest } from '../Model/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnDestroy {

model:AddEmployeeRequest;
private  addEmployeeSubscription?:Subscription;
 constructor(private employeeService:EmployeeService,
  private router:Router){
  this.model={
    name:'',
    email:'',
    mobileNumber:'',
    gender:'',
    address:'',
    qualification:'',
    designation:''

  };
 }
 
 onFormSubmit(){
   this.addEmployeeSubscription= this.employeeService.addEmployee(this.model)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/employees');
        // console.log('This was Successful !');
      }
    })
  }
  
  ngOnDestroy(): void {
    this.addEmployeeSubscription?.unsubscribe();
  }
}
