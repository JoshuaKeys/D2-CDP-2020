import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from '../../models/course.model';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Observable<CourseModel[]>

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }
  constructor(private coursesService: CoursesService) { }
}
