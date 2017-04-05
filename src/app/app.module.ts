import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { StudentForm } from './students/student_form.component';
import { StudentHttp } from './http_service/student_http.component';

@NgModule({
  imports:[ BrowserModule,
            FormsModule,
            HttpModule ],
  declarations: [ AppComponent,
    StudentForm,
    StudentHttp],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
