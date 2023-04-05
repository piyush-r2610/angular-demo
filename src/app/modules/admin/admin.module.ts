import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { AddUpdateComponent } from './pages/add-update/add-update.component';

@NgModule({
  declarations: [
    AdminDashComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
