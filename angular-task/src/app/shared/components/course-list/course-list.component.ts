import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseModel } from '../../models/course.model';
import { CoursesService } from '../../services/courses/courses.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Observable<CourseModel[]>
  filter: string;

  ngOnInit() {
    this.courses = this.coursesService.getCourses()
  }
  applyFilter(event) {
    this.courses = this.coursesService.getCourses().pipe(
      map((course)=> course.filter(item=> {
        let regExp = new RegExp(event);
        return item.title.match(regExp);
      }))
    )
  }
  constructor(private coursesService: CoursesService) { }
}
