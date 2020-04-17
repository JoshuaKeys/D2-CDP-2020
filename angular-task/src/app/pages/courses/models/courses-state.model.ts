import { CourseModel } from 'src/app/shared/models/course.model';

export interface CoursesStateModel {
  courses: CourseModel[];
  isModalOpen: boolean;
}
