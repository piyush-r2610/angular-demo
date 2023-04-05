import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/modules/admin/pages/add-emloyee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  getEmployees() {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:3000/posts'

  constructor(private http:HttpClient) { }

  getEmployee(){
    return this.http.get<Employee[]>(this.baseUrl)
  }

  postEmployee(employee:Employee){
    return this.http.post<Employee[]>(this.baseUrl, employee)
  }

  deleteEmployee( id:string ){

    // return this.http.delete(this.baseUrl + '/' + id);
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  getEmployeeData(id:string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateEmployee(id:string,data:[]){
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }

}
