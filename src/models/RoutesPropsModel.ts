import { AppState } from "./app-state.model";
import { CourseModel } from "../modules/shared/models/Course.model";

export interface RoutesPropsModel { 
    state: AppState,
    addCourse: (course: CourseModel) => void,
    deleteCourse: (course: CourseModel) => void,
    updateCourse: (course: CourseModel) => void 
}