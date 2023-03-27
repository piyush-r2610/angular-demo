import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { comment } from './comment.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  comments=[]
  url='https://admin-db0b4-default-rtdb.firebaseio.com/comment.json';
  btnClick:Boolean= false

  @ViewChild('commentForm')
  userForm!: NgForm;

    constructor(private http:HttpClient){}
    ngOnInit(): void {}


    onAddCom(commentData:comment){
            console.log(commentData);
            this.http.post<comment>(this.url,commentData).subscribe(
              (res)=>{
                console.log(res)
              }
            )
          }

          btnClicked(){
            this.btnClick=true
          }
}
