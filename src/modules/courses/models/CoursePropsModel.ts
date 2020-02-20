import { CourseModel } from "../../shared/models/Course.model";
import { AuthorModel } from "../../shared/models/Author.model";

export interface CoursePropsModel {
    course: CourseModel,
    authors?: AuthorModel[];
    error?: string | undefined;
    editCourse: (course: CourseModel)=> void;
    deleteCourse: (course: CourseModel) => void;
}