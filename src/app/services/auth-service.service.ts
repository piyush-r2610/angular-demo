
import { Injectable } from '@angular/core';
import { Auth,} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of,  throwError } from 'rxjs';
import { EmpServiceService } from './emp-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private router: Router,private _auth:Auth,private emp:EmpServiceService) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Piyush Rajendra', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
 
}
