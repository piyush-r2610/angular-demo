import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { EmpServiceService } from 'app/services/emp-service.service';
import { Employee } from '../add-emloyee/employee.model';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:Employee[];
  employeesToDisplay:Employee[];

  constructor(private http:HttpClient,private employeeService:EmpServiceService){

      this.employees=[];
      this.employeesToDisplay=this.employees;
  }

  
  ngOnInit(): void {
  
    this.employeeService.getEmployee().subscribe((res) => {
      for (let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });

  }

  deleteEmployee(event:any){
      // console.log(event);
      this.employeeService.deleteEmployee(event).subscribe((result) =>
      console.log(result));
      // this.ngOnInit()
  }

  searchEmployees(event:any){
    let filterEmployees:Employee[] = [];

    if(event === ''){
      this.employeesToDisplay = this.employees;
    }
    else{
      filterEmployees = this.employees.filter((val,index)=>{
        let targetKey:string = val.firstname.toLowerCase() + ' ' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay=filterEmployees;
    }
  }

  
  

}
