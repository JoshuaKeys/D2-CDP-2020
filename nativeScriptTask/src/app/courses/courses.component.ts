import { Component, OnInit } from "@angular/core";

import { CourseService, DataItem } from "../shared/course.service";
import { NSRouterLink } from "nativescript-angular";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { tap, debounceTime, throttleTime } from 'rxjs/operators'

@Component({
    selector: "Home",
    templateUrl: "./courses.component.html"
})
export class CoursesComponent implements OnInit {
    items: Array<DataItem>;
    searchForm: FormGroup;

    constructor(private _itemService: CourseService, private activatedRoute: ActivatedRoute, public router: Router) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.searchForm = new FormGroup({
            searchBar: new FormControl('')
        })
        this.findCourses();
    }
    findCourses() {
        this.searchForm.valueChanges.pipe(
            debounceTime(1500),
            tap(change => {
                this.items = this._itemService.getItems().filter((item) => {
                    return item.name.match(change.searchBar) ? item : false
                })
            })
        ).subscribe()
    }
    onTextChanged(evt) {
        // console.log('Hellooooooo')
    }
    goToEditCourse(id) {
        this.router.navigate(['../item', id], { relativeTo: this.activatedRoute });
    }
    addCourse() {
        this.router.navigate(['../add'], { relativeTo: this.activatedRoute });
    }
}
