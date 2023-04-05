import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from 'app/services/emp-service.service';
import { Employee } from './employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-emloyee',
  templateUrl: './add-emloyee.component.html',
  styleUrls: ['./add-emloyee.component.css']
})
export class AddEmloyeeComponent implements OnInit {

  @ViewChild('fileInput') fileInput:any;

  educationOptions = [
    'SSC',
    'HSC',
    'Three year Degree Graduate',
    'Four year Degree Graduate',
    'Post Graduate',
    'PHD'
  ]

  employeeForm: FormGroup;

  employeesToDisplay:Employee[]

  employees:Employee[];

  empUpdate = new FormGroup({
    firstname: new FormControl('')
  })

  constructor(private fb: FormBuilder,private employeeService:EmpServiceService,private router:Router, private route:ActivatedRoute){

    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;

  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control('')?.value,
      lastname: this.fb.control(''),
      birthday: this.fb.control('26-10-2000'),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),

    });

    this.employeeService.getEmployee().subscribe(res => {
        // console.log(res);
    });

    this.employeeService.getEmployeeData(this.route.snapshot.params['id']).subscribe((res?)=>{
      this.employeeForm = this.fb.group({
        firstname: this.fb.control(res['firstname' as keyof typeof res] )?.value,
        lastname: this.fb.control(res['lastname' as keyof typeof res] )?.value,
        birthday: this.fb.control(res['birthdate' as keyof typeof res] )?.value,
        gender: this.fb.control(res['gender' as keyof typeof res] )?.value,
        education: this.fb.control(res['birthday' as keyof typeof res] )?.value,
        company: this.fb.control(res['company' as keyof typeof res] )?.value,
        jobExperience: this.fb.control(res['jobExperience' as keyof typeof res] )?.value,
        salary: this.fb.control(res['salary' as keyof typeof res] )?.value,
  
      });

    })

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
      profile: this.fileInput.nativeElement.files[0]?.name,
    };
    this.employeeService.postEmployee(employee).subscribe((res) => {
      this.employees.unshift(employee)
      this.clearForm();
      this.router.navigate(['/admin/edetails'])
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
    this.fileInput.nativeElement.value = '';
  }

  updateData(){

    this.employeeService.updateEmployee(this.route.snapshot.params['id'],this.employeeForm.value).subscribe(
      (res) => {
        console.log(res,"data updated");
      }
    )
    
  }


  deleteEmployee(){
    
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

}
