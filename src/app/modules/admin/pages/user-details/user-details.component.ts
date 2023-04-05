import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpServiceService } from 'app/services/emp-service.service';
import { Employee } from '../add-emloyee/employee.model';

import { AddEmloyeeComponent } from '../add-emloyee/add-emloyee.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  educationOptions = [
    'SSC',
    'HSC',
    'Three year Degree Graduate',
    'Four year Degree Graduate',
    'Post Graduate',
    'PHD'
  ]

  @ViewChild('fileInput') fileInput:any;

  employeeForm: FormGroup;

  
  employeesToDisplay:Employee[]

  employees:Employee[];



  constructor(private fb: FormBuilder,private employeeService:EmpServiceService,private router:Router, private route:ActivatedRoute){

    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;

  }

  
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control('',Validators.required).value,
      lastname: this.fb.control('',Validators.required),
      birthday: this.fb.control('26-10-2000',Validators.required),
      gender: this.fb.control('m',Validators.required),
      education: this.fb.control('default',Validators.required),
      company: this.fb.control('',Validators.required),
      jobExperience: this.fb.control('',Validators.required),
      salary: this.fb.control('',Validators.required),

    });
  }


  addEmployee(){
    let employee: Employee = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
   
    };
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(employee)
      this.clearForm();
      this.router.navigate(['/admin/edetails'])
      console.log(res)
    });
  }
  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
  }

  

  
  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl;
  }
  public get Company(): FormControl {
    return this.employeeForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }
 
  saveForm(){

  }
}
