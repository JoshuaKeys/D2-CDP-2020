import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, } from 'rxjs';
import { CourseModel } from '../../models/course.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { Store } from '@ngrx/store';
import { CoursesStateModel } from 'src/app/pages/courses/models/courses-state.model';
import { fetchCoursesRequestAction, deleteCourseRequestAction, openModalAction, closeModalAction } from 'src/app/pages/courses/+state/courses.actions';
import { selectCourses, selectModalState } from 'src/app/pages/courses/+state/courses.selectors';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<CourseModel[]>
  filter: string;
  isModalOpen$: Observable<boolean>;
  course: CourseModel;
  @ViewChild('appModal', {static: false}) modal: ModalWindowComponent;
  ngOnInit() {
    this.store.dispatch(fetchCoursesRequestAction());
    this.courses$ = this.store.select(selectCourses);
    this.isModalOpen$ = this.store.select(selectModalState);
  }
  applyFilter(event) {
    this.courses$ = this.courses$.pipe(
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
    this.store.dispatch(openModalAction())
    this.modal.message = `Delete the course - ${course.title}?`;
    this.course = course;
  }
  onClose() {
    this.store.dispatch(closeModalAction())
    this.course = null;
  }
  onDeleteConfirm() {

    this.store.dispatch(deleteCourseRequestAction({course: this.course}));
    this.course = null;
  }
  constructor(
    private router: Router,
    private store: Store<CoursesStateModel>
  ) { }
}
