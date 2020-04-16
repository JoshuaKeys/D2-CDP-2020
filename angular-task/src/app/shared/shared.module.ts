import { NgModule } from "@angular/core";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CoursesService } from "./services/courses.service";
import { CommonModule } from "@angular/common";
import { NumberToTimePipe } from "./pipes/number-to-time-pipe.pipe";
import { ModalWindowComponent } from "./components/modal-window/modal-window.component";
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseListComponent,
    NavigationComponent,
    FooterComponent,
    NumberToTimePipe,
    ModalWindowComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CourseCardComponent,
    CourseListComponent,
    NavigationComponent,
    FooterComponent,
    NumberToTimePipe,
    ModalWindowComponent,
    SearchComponent,
    ReactiveFormsModule
  ],
  // providers: [CoursesService],
})
export class SharedModule {}
