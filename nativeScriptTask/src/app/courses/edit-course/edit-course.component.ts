import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { CourseService, DataItem } from "../../shared/course.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular";

@Component({
    selector: "EditCourse",
    templateUrl: "./edit-course.component.html"
})
export class EditCourseComponent implements OnInit {
    item: DataItem;
    editForm: FormGroup;
    constructor(
        private _data: CourseService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private vcRef: ViewContainerRef
    ) { }

    ngOnInit(): void {

        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
        this.editForm = new FormGroup({
            id: new FormControl(this.item.id, Validators.required),
            name: new FormControl(this.item.name, Validators.required),
            description: new FormControl(this.item.description, Validators.required),
            duration: new FormControl(this.item.duration, Validators.required),
            picture: new FormControl(this.item.picture, Validators.required),
            date: new FormControl(this.item.date, Validators.required),
        })
    }
    submit() {
        this._data.updateItem(this.editForm.value);
        this._routerExtensions.back()
    }
    onBackTap(): void {
        this._routerExtensions.back();
    }
    deleteCourse(id) {
        dialogs.confirm({
            title: "Your title",
            message: "Delete This course?",
            okButtonText: "Delete",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result) {
                this._data.removeItem(id)
                this._routerExtensions.back();
            }
        });
    }
}
