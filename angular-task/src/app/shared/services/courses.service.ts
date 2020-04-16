import { Injectable } from "@angular/core";
import { CourseModel } from '../models/course.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>('http://localhost:3001/api/courses');
  }
  getCourse(id: string): Observable<CourseModel> {
    return this.httpClient.get<CourseModel>('http://localhost:3001/api/courses/' + id);
  }
  addCourse(course: CourseModel): Observable<CourseModel> {
    return this.httpClient.post<CourseModel>('http://localhost:3001/api/courses', course);
  }
  editCourse(course: CourseModel): Observable<CourseModel> {
    return this.httpClient.put<CourseModel>('http://localhost:3001/api/courses/' + course.id, course)
  }
  deleteCourse(course: CourseModel): Observable<{} | HttpErrorResponse> {
    return this.httpClient.delete<{} | HttpErrorResponse>('http://localhost:3001/api/courses/' + course.id);
  }
  constructor(private httpClient: HttpClient) {}
}
