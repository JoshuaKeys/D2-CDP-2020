import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CoursesComponent } from "./courses.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoursesRoutingModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CoursesComponent,
        EditCourseComponent,
        AddCourseComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]
})
export class CoursesModule { }
