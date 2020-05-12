import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CoursesComponent } from "./courses.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";

const routes: Routes = [
    { path: "default", component: CoursesComponent },
    { path: "item/:id", component: EditCourseComponent },
    { path: 'add', component: AddCourseComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoursesRoutingModule { }
