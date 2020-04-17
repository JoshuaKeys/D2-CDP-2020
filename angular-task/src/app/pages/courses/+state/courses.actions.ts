import { createAction, props } from "@ngrx/store";
import { CourseModel } from 'src/app/shared/models/course.model';

export const fetchCoursesRequestAction = createAction(
  '[CourseListComponent] fetchCoursesRequestAction'
);
export const fetchCoursesSuccessAction = createAction(
  '[CoursesEffects API] fetchCoursesSuccessAction',
  props<{courses: CourseModel[]}>()
);
export const fetchCoursesFailureAction = createAction(
  '[CoursesEffects API] fetchCoursesFailureAction'
);
export const deleteCourseRequestAction = createAction(
  '[CourseListComponent] deleteCourseRequestAction',
  props<{course: CourseModel}>()
);
export const deleteCourseSuccessAction = createAction(
  '[CoursesEffects API] deleteCourseSuccessAction',
  props<{index: string}>()
);
export const deleteCourseFailureAction = createAction(
  '[CoursesEffects API] deleteCourseFailureAction'
);
export const openModalAction = createAction(
  '[CourseListComponent] openModalAction'
);
export const closeModalAction = createAction(
  '[CourseListComponent] closeModalAction'
);
export const addCourseRequestAction = createAction(
  '[EditCourseComponent] addCourseRequestAction',
  props<{course: CourseModel}>()
)
export const addCourseSuccessAction = createAction(
  '[CourseEffects API] addCourseSuccessAction',
  props<{course: CourseModel}>()
)
export const addCourseFailureAction = createAction(
  '[CourseEffects API] addCourseFailureAction'
)
export const editCourseRequestAction = createAction(
  '[EditCourseComponent] editCourseRequestAction',
  props<{course: CourseModel}>()
)
export const editCourseSuccessAction = createAction(
  '[CourseEffects API] editCourseSuccessAction',
  props<{course: CourseModel}>()
)
export const editCourseFailureAction = createAction(
  '[CourseEffects API] editCourseFailureAction'
)
