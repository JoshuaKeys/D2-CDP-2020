import { CourseModel } from "../../shared/models/Course.model";
import { RouteComponentProps } from "react-router-dom";

export interface CreateEditPropsModel extends RouteComponentProps{
    course?: CourseModel;
    onSave?: ()=> void;
}