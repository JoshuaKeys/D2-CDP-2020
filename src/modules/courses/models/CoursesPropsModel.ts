import { CourseModel } from '../../shared/models/Course.model'
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../models/app-state.model';
import { AuthorModel } from '../../shared/models/Author.model';

export interface CoursesPropsModel extends RouteComponentProps<any>{
    courses: Array<CourseModel>;
    authors?: AuthorModel[];
    deleteCourse: (course: CourseModel)=> void;
    logout: ()=> void;
}