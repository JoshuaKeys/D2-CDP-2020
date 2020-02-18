// import { LoginFormModel } from "../models/login-form.model";
import { HttpClient } from "../modules/shared/services/httpClient";

export class CourseService {

    constructor(private httpClient: HttpClient) {}
    getCourses<T>() : Promise<{body: T, headers: Headers, status: number}>{
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/login', {
            method: 'POST',
            headers,
        })
        return this.httpClient.request<T>(req);
    }
}