import { AuthModel } from "./auth.model";
import { CoursesPropsModel } from "../modules/courses/models/CoursesPropsModel";
import { RouteComponentProps } from "react-router-dom";
import { CourseModel } from "../modules/shared/models/Course.model";
import { CoursesStateModel } from "../modules/courses/models/CoursesStateModel";

export interface MatchParams {
    name: string;
}
interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

export interface AppState extends RouteComponentProps<MatchParams>{
    auth?: AuthModel,
    courses: CoursesStateModel;
    match: match<MatchParams>;
}