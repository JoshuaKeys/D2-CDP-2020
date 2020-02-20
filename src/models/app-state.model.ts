import { AuthModel } from "./auth.model";
import { CoursesPropsModel } from "../modules/courses/models/CoursesPropsModel";
import { RouteComponentProps } from "react-router-dom";
import { CourseModel } from "../modules/shared/models/Course.model";
import { CoursesStateModel } from "../modules/courses/models/CoursesStateModel";

export interface AppState extends RouteComponentProps<any>{
    auth?: AuthModel,
    courses?: CoursesStateModel,
}