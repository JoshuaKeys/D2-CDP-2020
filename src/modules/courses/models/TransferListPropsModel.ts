import { AuthorModel } from "../../shared/models/Author.model";

export interface TransferListPropsModel {
    allAuthors: AuthorModel[];
    courseAuthors: AuthorModel[];
    updateAuthors: (authors: AuthorModel[])=> void
}