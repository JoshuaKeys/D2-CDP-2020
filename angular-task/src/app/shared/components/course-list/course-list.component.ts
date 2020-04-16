import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseModel } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Observable<CourseModel[]>
  filter: string;
  isOpen = false;
  course: CourseModel;
  @ViewChild('appModal', {static: false}) modal: ModalWindowComponent;
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
  addCourse() {
    this.router.navigateByUrl('courses/new');
  }
  deleteCourse(course: CourseModel) {
    this.isOpen = true;
    const div = this.renderer.createElement('div');
    this.modal.message = `Delete the course - ${course.title}?`;
    this.course = course;
  }
  onClose() {
    this.isOpen = false;
    this.course = null;
  }
  onDeleteConfirm() {
    this.coursesService.deleteCourse(this.course).subscribe(
      _=> {
        this.courses = this.coursesService.getCourses();
        this.onClose();
    })
  }
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private renderer: Renderer2
  ) { }
}
