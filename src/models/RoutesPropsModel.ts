import { AppState } from "./app-state.model";
import { CourseModel } from "../modules/shared/models/Course.model";
import { LoginFormModel } from "../modules/auth-module/models/login-form.model";

export interface RoutesPropsModel { 
    state: AppState,
    addCourse: (course: CourseModel) => void;
    deleteCourse: (course: CourseModel) => void;
    updateCourse: (course: CourseModel) => void;
    login: (loginPayload: LoginFormModel) => void;
    logout: ()=> void;
}