import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  constructor() { }
  @Input('course') course: CourseModel;
  creationDate: Date;
  ngOnInit() {
    this.creationDate = new Date(this.course.creationDate)
  }

}
