// import { LoginFormModel } from "../models/login-form.model";
import { HttpClient } from "../../shared/services/httpClient";

export class AuthorsService {

    constructor(private httpClient: HttpClient) {}
    getAuthors<T>() : Promise<{body: T, headers: Headers, status: number}>{
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/authors', {
            method: 'GET',
            headers,
        })
        return this.httpClient.request<T>(req);
    }
    
}