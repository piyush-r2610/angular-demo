import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthServiceService } from 'app/services/auth-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
 
  constructor(private el:ElementRef,private authService:AuthServiceService){}
  ngOnInit(): void {
      this.openNav(true)
    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    console.log(alldrpdwn,'alldrpdwn#');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a,'a#');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });
      
    });

  }


  // responsivemenu 
  responsiveMenu:any;
  // responsivemaincontent
  responsiveContent:any;
  defaultStatus=false;
  hideanchor=false;
  openNav(status:any)
  {
    //sidenav off
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = {
        'display':'block',
        'width':'60px',
      
        // 'text-align': 'center'
      }
      this.responsiveContent={
        'margin-left':'60px',
        'margin-top':'60px'
      }
      this.defaultStatus = true;
      this.hideanchor = true;
    }else
    {
      
    //sidenav on
      this.responsiveMenu = {
        'display':null,
        // 'text-align': 'center'
      }
      this.responsiveContent={
        'margin-left':'',
        'margin-top':'60px'
      }
      this.defaultStatus=false;
      this.hideanchor = false;
    }

  }
  logout(){
    this.authService.logout()
  }

}
