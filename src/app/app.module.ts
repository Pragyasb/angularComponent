import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModule/mat/mat.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HeaderComponent } from './employees/header/header.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { DialogComponent } from './employees/dialog/dialog.component';
import { AddEmployeeReactiveComponent } from './employees/add-employee-reactive/add-employee-reactive.component'
import { DialogReactiveComponent } from './employees/dialog-reactive/dialog-reactive.component';
import { ChildComponent } from './child/child.component';
import { ChildTwoComponent } from './child-two/child-two.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    AddEmployeeComponent,
    DialogComponent,
    AddEmployeeReactiveComponent,
    DialogReactiveComponent,
    ChildComponent,
    ChildTwoComponent
  ],
  entryComponents: [AddEmployeeComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
