import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from 'app/services/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     boolean {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['login']);
      // return false;
    }
    return this.authService.isLoggedIn();
  }
  
}
