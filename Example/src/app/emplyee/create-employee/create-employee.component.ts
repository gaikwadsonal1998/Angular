import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm=new FormGroup({
      fullName: new FormControl(),
      email:new FormControl(),
      contact :new FormControl(),
      address:new FormControl(),
      password:new FormControl()
    });
  }

  onSubmit():void{
    console.log(this.employeeForm); 
    console.log(this.employeeForm.get('fullName').value);
    console.log(this.employeeForm.touched);
  }
}
