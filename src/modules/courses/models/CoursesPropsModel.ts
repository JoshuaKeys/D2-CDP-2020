import { CourseModel } from '../../shared/models/Course.model'
import { RouteComponentProps } from 'react-router-dom';

export interface CoursesPropsModel extends RouteComponentProps<any>{
    courses: Array<CourseModel>;
    isAuthenticated: boolean;
}