import { LoginFormModel } from "../models/login-form.model";
import { HttpClient } from "../../shared/services/httpClient";

export class LoginService {

    constructor(private httpClient: HttpClient) {}
    loginUser<T>(loginDetails: LoginFormModel) : Promise<{body: T, headers: Headers, status: number}>{
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        const req = new Request('http://localhost:3001/api/login', {
            method: 'POST',
            headers,
            body: JSON.stringify(loginDetails)
        })
        return this.httpClient.request<T>(req);
    }
}