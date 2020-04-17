import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/shared/models/course.model';
import { of, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { State, Store } from '@ngrx/store';
import { CoursesStateModel } from 'src/app/pages/courses/models/courses-state.model';
import { editCourseRequestAction, addCourseRequestAction } from 'src/app/pages/courses/+state/courses.actions';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  course: CourseModel;
  isReady: boolean;
  mode: string;
  authors: Array<string>;
  allAuthors: Array<string>;
  editForm: FormGroup;
  ngOnInit() {
    this.allAuthors = [
      'Author1', 'Author2', 'Author3', 'Author4', 'Author5'
    ];
    if(this.activatedRoute.snapshot.params['id']) {
      this.coursesService.getCourse(this.activatedRoute.snapshot.params['id']).subscribe(course => {
        this.course = course;
        this.isReady = true;
        this.editCourse();
        this.mode = 'edit';
      });
    }else {
      this.mode = 'create';
      this.course = null;
      this.isReady = true;
      this.createCourse();
    }
  }
  createCourse() {
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      creationDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      authors: new FormControl([], Validators.required)
    })
  }
  editCourse() {
    this.editForm = new FormGroup({
      id: new FormControl(this.course.id),
      title: new FormControl(this.course.title, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      creationDate: new FormControl(this.datePipe.transform(this.course.creationDate, 'yyyy-MM-dd'), Validators.required),
      duration: new FormControl(this.course.duration, Validators.required),
      authors: new FormControl(this.course.authors, Validators.required)
    })
  }
  onSubmitForm() {
    if(this.mode === 'edit') {
      this.store.dispatch(editCourseRequestAction({course: this.editForm.value}))
    }else {
      this.store.dispatch(addCourseRequestAction({course: this.editForm.value}))
    }
  }
  onCancel() {
    this.router.navigateByUrl('/courses')
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
    private datePipe: DatePipe,
    private store: Store<CoursesStateModel>
  ) {}
}
