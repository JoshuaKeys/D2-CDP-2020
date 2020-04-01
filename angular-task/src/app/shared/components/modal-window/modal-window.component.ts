import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  @Input('title') title: string;
  @Input('message') message: string;
  @Output('close') onModalClosed = new EventEmitter<any>();
  @Output('confirm') onModalConfirmed = new EventEmitter<any>();
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
