import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeeComponent} from './emplyee/list-employee/list-employee.component';
import{CreateEmployeeComponent} from './emplyee/create-employee/create-employee.component';

const routes: Routes = [
  { path:'list', component: ListEmployeeComponent },
  { path:'create', component:CreateEmployeeComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
