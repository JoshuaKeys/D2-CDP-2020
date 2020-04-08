import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/shared/models/course.model';
import { of, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor() { }
  course: CourseModel;
  authors: Array<string>;
  allAuthors: Array<string>;
  editForm: FormGroup;
  ngOnInit() {
    this.course =  {
      "id": "a7cl47wfgd",
      "title": "Become a Agent",
      "creationDate": "2019-04-15",
      "duration": 218,
      "description": "rerum vel fugiat explicabo est recusandae reiciendis cumque vitae quaerat at qui excepturi nihil possimus et quas velit rerum ratione tenetur quo adipisci rerum nulla nihil ullam autem eligendi nesciunt ea qui nemo odio sapiente animi tempora possimus iste eaque dolorem recusandae quisquam amet provident assumenda dolores natus quo consectetur",
      "authors": [
        'Author1', 'Author2', 'Author3'
      ]
    }
    this.allAuthors = [
      'Author1', 'Author2', 'Author3', 'Author4', 'Author5'
    ];
    if(this.course) {
      this.editCourse();
    }else {
      this.createCourse();
    }
  }
  createCourse() {
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      creationDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      authors: new FormControl(this.allAuthors, Validators.required)
    })
  }
  editCourse() {
    this.editForm = new FormGroup({
      title: new FormControl(this.course.title, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      creationDate: new FormControl(this.course.creationDate, Validators.required),
      duration: new FormControl(this.course.duration, Validators.required),
      authors: new FormControl(this.course.authors, Validators.required)
    })
  }
  onEditForm() {
    console.log(this.editForm)
  }

}
