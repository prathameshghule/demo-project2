import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Model/employee.model';
import { UpdateEmployeeRequest } from '../Model/update-employee-request.model';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, OnDestroy{
  empId:string | null=null;
  paramsSubscription?:Subscription;
  editEmployeeSubscription?:Subscription;
 employee?:Employee
  constructor(private route:ActivatedRoute,
    private employeeService:EmployeeService,
    private router:Router){
  
  }
 
  ngOnInit(): void {
   this.paramsSubscription= this.route.paramMap.subscribe({
      next:(params)=>{
       this.empId= params.get('EmpId');
       if(this.empId){
          this.employeeService.getEmployeeByEmpId(this.empId)
          .subscribe({
            next:(response)=>{
              this.employee=response;
            }
          });
       }
      }
    });
  }
  onFormSubmit():void{
    const updateEmployeeRequest:UpdateEmployeeRequest={
      name:this.employee?.name??'',
      email:this.employee?.email?? '',
      mobileNumber:this.employee?.mobileNumber?? '',
      gender:this.employee?.gender?? '',
      address:this.employee?.address?? '',
      qualification:this.employee?.qualification?? '',
      designation:this.employee?.designation?? '',
    };
    if(this.empId){
   this.editEmployeeSubscription= this.employeeService.updateEmployee(this.empId , updateEmployeeRequest)
    .subscribe({
      next:(response)=>{
        this.router.navigateByUrl('/admin/employees')
      }
    });
  }
 }

 onDelete(): void{
  if(this.empId){
this.employeeService.deleteEmployee(this.empId)
.subscribe({
  next:(response)=>{
    this.router.navigateByUrl('/admin/employee');
  }
})
}
}

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editEmployeeSubscription?.unsubscribe();
  }
 }  