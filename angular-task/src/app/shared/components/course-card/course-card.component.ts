import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input('course') course: CourseModel;
  @Output('onDeleteCourse') onDeleteCourse = new EventEmitter<CourseModel>();
  creationDate: Date;
  ngOnInit() {
    this.creationDate = new Date(this.course.creationDate)
  }
  editCourse() {
    this.router.navigateByUrl('/courses/' + this.course.id)
  }
  deleteCourse() {
    this.onDeleteCourse.emit(this.course);
  }
  constructor(private router: Router) { }
}
