import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z0-9]+/g),
        Validators.minLength(6)
      ])
    });
  }
  onLogin() {
    this.loginError = null;
    this.authService.loginUser(this.loginForm.value).subscribe((_)=> {
      localStorage.setItem('isAuthorized', 'true');
      this.router.navigateByUrl('/courses')
      console.log('Hello People');

    },
    (error: HttpErrorResponse)=> {
      if(error.status === 401) {
        this.loginError = 'Wrong login or password'
      }
    })
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
