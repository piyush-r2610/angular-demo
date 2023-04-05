import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from "@angular/material/dialog"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import {MatIcon, MatIconModule} from '@angular/material/icon';
import {DialogModule} from '@angular/cdk/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from '../app/modules/admin/pages/users/users.component';
import { ReportsComponent } from '../app/modules/admin/pages/reports/reports.component';
import { UserDetailsComponent } from '../app/modules/admin/pages/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { EmployeeDetailsComponent } from './modules/admin/pages/employee-details/employee-details.component';
import { AddEmloyeeComponent } from './modules/admin/pages/add-emloyee/add-emloyee.component';
import { AddUpdateComponent } from './modules/admin/pages/add-update/add-update.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReportsComponent,
    UserDetailsComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    AddEmloyeeComponent,
    AddUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMatFileInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    DialogModule,
    MatToolbarModule,

    FontAwesomeModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
