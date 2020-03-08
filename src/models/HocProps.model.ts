import { CourseModel } from "../modules/shared/models/Course.model";
import { LoginFormModel } from "../modules/auth-module/models/login-form.model";

export interface HocPropsModel {
    onUpdateCourse(course: CourseModel): void;
    onAddCourse(course: CourseModel): void;
    getCourses(): void;
    onDeleteCourse(course: CourseModel): void;
    onLogin(loginPayload: LoginFormModel): void;
    onLogout(): void;
}