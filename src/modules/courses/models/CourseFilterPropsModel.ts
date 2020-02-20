import { CourseModel } from "../../shared/models/Course.model";
import { ChangeEventHandler } from "react";

export interface CourseFilterPropsModel {
    onFilter: (filter: string)=> void
}