// import { LoginFormModel } from "../models/login-form.model";
import { HttpClient } from "../../shared/services/httpClient";
import { CourseModel } from "../../shared/models/Course.model";

export class CourseService {
    constructor(private httpClient: HttpClient) {}
    getCourses<T>() : Promise<{body: T, headers: Headers, status: number}>{
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/courses', {
            method: 'GET',
            headers,
        })
        return this.httpClient.request<T>(req);
    }
    updateCourse<T>(course: CourseModel): Promise<{body: T, headers: Headers, status: number}> {
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/courses/'+course.id, {
            method: 'PUT',
            headers,
            body: JSON.stringify(course)
        })
        return this.httpClient.request<T>(req);
    }
    deleteCourse<T>(course: CourseModel) {
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/courses/'+course.id, {
            method: 'DELETE',
            headers
        })
        return this.httpClient.request<T>(req);
    }
    addCourse<T>(course: CourseModel) {
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/courses', {
            method: 'POST',
            headers,
            body: JSON.stringify(course)
        })
        return this.httpClient.request<T>(req);
    }
}