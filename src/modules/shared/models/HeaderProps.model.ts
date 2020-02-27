import { CourseModel } from "./Course.model";

export interface HeaderPropsModel {
    page?: string;
    course?: CourseModel;
    children?: string;
    logout?: ()=> void;
}