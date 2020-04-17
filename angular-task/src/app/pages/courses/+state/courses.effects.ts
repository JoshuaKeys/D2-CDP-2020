import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  fetchCoursesRequestAction,
  fetchCoursesSuccessAction,
  deleteCourseRequestAction,
  deleteCourseFailureAction,
  deleteCourseSuccessAction,
  fetchCoursesFailureAction,
  closeModalAction,
  editCourseRequestAction,
  editCourseSuccessAction,
  addCourseRequestAction,
  addCourseSuccessAction,
  addCourseFailureAction,
  editCourseFailureAction
} from './courses.actions';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoursesStateModel } from '../models/courses-state.model';
import { selectCourses } from './courses.selectors';
@Injectable()
export class CoursesEffects {
  fetchCoursesRequest$ = createEffect(()=> this.actions$.pipe(
    ofType(fetchCoursesRequestAction),
    withLatestFrom(this.store.select(selectCourses)),
    mergeMap(([action, courses]) => {
      if(courses && courses.length > 0) {
        return of(courses).pipe(map(courses=> fetchCoursesSuccessAction({courses})))
      }
      return this.coursesService.getCourses().pipe(
      map(courses=> fetchCoursesSuccessAction({courses})),
      catchError(_ => of(fetchCoursesFailureAction()))
    )})
  ));
  deleteCourseRequest$ = createEffect(()=> this.actions$.pipe(
    ofType(deleteCourseRequestAction),
    mergeMap(action => this.coursesService.deleteCourse(action.course).pipe(
      mergeMap(_ => [deleteCourseSuccessAction({index: action.course.id}), closeModalAction()]),
      catchError(_ => of(deleteCourseFailureAction()))
    ))
  ));
  editCourseRequest$ = createEffect(()=> this.actions$.pipe(
    ofType(editCourseRequestAction),
    mergeMap(action => this.coursesService.editCourse(action.course).pipe(
      map(course => {
        this.router.navigateByUrl('/courses')
        return  editCourseSuccessAction({course})
      }),
      catchError(_ => {
        return of(editCourseFailureAction());
      })
    ))
  ));
  addCourseRequest = createEffect(()=> this.actions$.pipe(
    ofType(addCourseRequestAction),
    mergeMap(action => this.coursesService.addCourse(action.course).pipe(
      map(course => {
        this.router.navigateByUrl('/courses')
        return  addCourseSuccessAction({course})
      }),
      catchError(_ => {
        return of(addCourseFailureAction());
      })
    ))
  ))
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
    private store: Store<CoursesStateModel>
  ) {}
}
