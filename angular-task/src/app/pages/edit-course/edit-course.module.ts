import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransferListComponent } from './components/transfer-list/transfer-list.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';



@NgModule({
  declarations: [EditCourseComponent, TransferListComponent, AuthorsListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    EditCourseComponent,
  ]
})
export class EditCourseModule { }
