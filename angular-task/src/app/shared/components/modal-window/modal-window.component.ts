import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from '../../models/course.model';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input('title') title: string;
  @Input('message') message: string;
  @Input('isOpen') isOpen: boolean;
  @Output('close') onModalClosed = new EventEmitter<any>();
  @Output('confirm') onModalConfirmed = new EventEmitter<CourseModel>();
  constructor() { }
  closeModal() {
    this.onModalClosed.emit();
  }
  confirmModal() {
    this.onModalConfirmed.emit();
  }
  ngOnInit() {
  }
}
