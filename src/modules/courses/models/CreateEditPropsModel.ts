import { CourseModel } from "../../shared/models/Course.model";

export interface CreateEditPropsModel {
    course?: CourseModel;
    onSave?: ()=> void;
}