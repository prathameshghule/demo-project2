import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './features/Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './features/Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './features/Employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'admin/employees',
    component:EmployeeListComponent
  },
  {
    path:'admin/employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'admin/employees/:EmpId',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
