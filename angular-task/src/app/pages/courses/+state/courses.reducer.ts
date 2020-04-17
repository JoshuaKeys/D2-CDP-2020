import { createReducer, on } from "@ngrx/store";
import { CoursesStateModel } from '../models/courses-state.model';
import { fetchCoursesSuccessAction, deleteCourseSuccessAction, openModalAction, closeModalAction, addCourseSuccessAction, editCourseSuccessAction } from './courses.actions';
import { CourseModel } from 'src/app/shared/models/course.model';
import { Immutable, ImmutableObject } from 'seamless-immutable';
import * as SeamlessImmutable from 'seamless-immutable';

function findCoursesAndIndex(courses: CourseModel[], idx: string) {
  const _courses = [...courses];
  const courseIndex = _courses.findIndex(course=> course.id === idx);
  return {courseIndex, courses: _courses}
}
const initialState:ImmutableObject<CoursesStateModel> = SeamlessImmutable({
  courses: null,
  isModalOpen: false
});
const _coursesReducer = createReducer(initialState,
  on(fetchCoursesSuccessAction, (state, action)=> {
    return state.replace({courses: action.courses})
  }),
  on(deleteCourseSuccessAction, (state, action)=> {
    return state.update('courses', (courses)=> {
      const _courses = [...courses];
      const courseIndex = _courses.findIndex(course=> course.id === action.index);
      _courses.splice(courseIndex, 1);
      return _courses;
    })
  }),
  on(openModalAction, (state, action)=> {
    return state.set('isModalOpen', true)
  }),
  on(closeModalAction, (state, action)=> {
    return state.set('isModalOpen', false);
  }),
  on(addCourseSuccessAction, (state, action)=> {

    return state.update('courses', (courses)=> {
      const {courses: _courses, courseIndex} = findCoursesAndIndex(courses, null);
      _courses.unshift(action.course);
      return _courses;
    })
  }),
  on(editCourseSuccessAction, (state, action)=> {

    return state.update('courses', (courses)=> {
      const {courses: _courses, courseIndex} = findCoursesAndIndex(courses, action.course.id);
      _courses[courseIndex] = action.course;
      return _courses;
    })
  })
);

export function coursesReducer(state, action) {
  return _coursesReducer(state, action);
}
