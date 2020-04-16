import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input('course') course: CourseModel;
  @Input('showMid') showMid: boolean;
  @Input('hideNav') hideNav: boolean;

  ngOnInit() {
  }
  logout(event) {
    event.preventDefault();
    this.authService.logOut();
  }
  constructor(
    private authService: AuthService

  ) { }
}
