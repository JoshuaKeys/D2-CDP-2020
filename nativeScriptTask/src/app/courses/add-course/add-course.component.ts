import { Component } from "@angular/core";
import { DataItem, CourseService } from "~/app/shared/course.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

@Component({
    templateUrl: './add-course.component.html'
})
export class AddCourseComponent {
    item: DataItem;
    addForm: FormGroup;
    constructor(
        private _data: CourseService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.addForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            picture: new FormControl('', Validators.required),
            date: new FormControl('', Validators.required),
        })
    }
    submit() {
        console.log(this.addForm.value);
        this._data.addItem(this.addForm.value);
        this._routerExtensions.back()
    }
    onBackTap(): void {
        this._routerExtensions.back();
    }
}
