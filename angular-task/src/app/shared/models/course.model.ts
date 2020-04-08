export class CourseModel {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  authors?: Array<string>;
}
