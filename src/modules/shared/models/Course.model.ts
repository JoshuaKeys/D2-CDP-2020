import { AuthorModel } from "./Author.model";

export interface CourseModel {
    id: string;
    title: string;
    duration: number;
    creationDate: string;
    description: string;
    authors: AuthorModel[];
    history?: any
}