import { Injectable } from '@angular/core';
import { Student } from '../students/student';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService{

  private studentsUrl = 'app/mock_back_end/students.json';

  constructor(private http: Http){
  }

  getStudents(): Observable<Student[]> {
    return this.http.get(this.studentsUrl)
    .map(response => response.json().students as Student[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
