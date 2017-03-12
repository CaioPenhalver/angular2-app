import { Component } from '@angular/core';
import { Student } from './student';
import { FormGroup }   from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'student-register',
  templateUrl: 'student_form.component.html'
})

export class StudentForm{
  
  public studentsList: Array<Student>;

  constructor(){
    this.studentsList = new Array<Student>();
  }

  courses = [
    'Arquitetura de Software', 
    'Desenvolvimento de games',
    'Desenvolvimento mobile'
  ];

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.studentsList.push(new Student(form.value.name, 
                                  form.value.address, 
                                  form.value.rg,
                                  form.value.course));
    form.reset();
    console.log(this.studentsList);
  }
}
