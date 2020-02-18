import { CourseModel } from "../../shared/models/Course.model";

export interface CoursePropsModel {
    course: CourseModel,
    editCourse: (course: CourseModel)=> void
}