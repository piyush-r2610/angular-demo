import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
 
  constructor(private el:ElementRef){}
  ngOnInit(): void {

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
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = {
        'display':'block',
        'width':'60px',
        // 'text-align': 'center'
      }
      this.responsiveContent={
        'margin-left':'40px'
      }
      this.defaultStatus = true;
      this.hideanchor = true;
    }else
    {
      this.responsiveMenu = {
        'display':null,
        // 'text-align': 'center'
      }
      this.responsiveContent={
        'margin-left':null
      }
      this.defaultStatus=false;
      this.hideanchor = false;
    }

  }

}
