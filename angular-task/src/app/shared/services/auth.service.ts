import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/pages/login/models/login.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(login: LoginModel) {
    console.log(login)
    return this.httpClient.post<{} | HttpErrorResponse>('http://localhost:3001/api/login', login);
  }
  logOut() {
    localStorage.removeItem('isAuthorized');
    this.router.navigateByUrl('/login');
  }
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }
}
