import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './+state/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './+state/courses.effects';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('coursesModule', coursesReducer),
    EffectsModule.forFeature([CoursesEffects])
  ]
})
export class CoursesModule { }
