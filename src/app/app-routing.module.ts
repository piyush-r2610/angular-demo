import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},

  //lazy loading after logged in
  {
    path:'admin',
    canActivate:[AuthGuard],loadChildren: () =>
     import('./modules/admin/admin.module').then((m)=> m.AdminModule,)
  } ,
  {path:'**',component:NotFoundComponent },

  //Lazy Loading for client Side
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
