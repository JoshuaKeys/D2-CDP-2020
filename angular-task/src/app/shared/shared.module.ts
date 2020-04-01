import { NgModule } from "@angular/core";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CoursesService } from "./services/courses/courses.service";
import { CommonModule } from "@angular/common";
import { NumberToTimePipe } from "./pipes/number-to-time-pipe.pipe";
import { ModalWindowComponent } from "./components/modal-window/modal-window.component";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseListComponent,
    NavigationComponent,
    FooterComponent,
    NumberToTimePipe,
    NumberToTimePipe,
    ModalWindowComponent,
  ],
  imports: [CommonModule],
  exports: [
    CourseCardComponent,
    CourseListComponent,
    NavigationComponent,
    FooterComponent,
    NumberToTimePipe,
    ModalWindowComponent,
  ],
  providers: [CoursesService],
})
export class SharedModule {}
