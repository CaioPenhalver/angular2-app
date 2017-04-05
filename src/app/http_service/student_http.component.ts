import { Component } from '@angular/core';
import { Student } from '../students/student';
import { StudentService } from './student.service';
import { OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'student-register-http',
  templateUrl: 'student_http.component.html',
  providers: [StudentService]
})

export class StudentHttp implements OnInit{

  public studentsList: Student[];

  constructor(private service: StudentService){}

  ngOnInit() { 
    this.getStudents();
    console.log("lksjdflksajflaksj");}

  getStudents(){
    this.service.getStudents().subscribe(students => this.studentsList = students);
  }
}
