import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/components/login/login.component';
import { CoursesComponent } from './pages/courses/components/courses/courses.component';
import { EditCourseComponent } from './pages/edit-course/components/edit-course/edit-course.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { NegativeAuthGuardService } from './shared/services/negative-auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NegativeAuthGuardService]
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses/new',
    component: EditCourseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
