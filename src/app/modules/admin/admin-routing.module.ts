import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
{ path: '',component:AdminDashComponent,children:[
  {path: 'dashboard',component: DashboardComponent},
  { path:'reports',component:ReportsComponent },
  { path:'userdetail',component:UserDetailsComponent },
  { path: 'users',component:UsersComponent },
  { path:'' ,redirectTo:'/admin/home',pathMatch:'full'}
] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
