import { CourseModel } from '../../shared/models/Course.model'
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../models/app-state.model';
import { AuthorModel } from '../../shared/models/Author.model';

export interface CoursesStateModel {
    courses: Array<CourseModel>;
    authors?: AuthorModel[];
    // isAuthenticated: boolean;
}