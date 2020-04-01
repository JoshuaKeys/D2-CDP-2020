import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';
  isModalOpen = true;
  onModalClosed() {
    this.isModalOpen = false;
  }
  onModalConfirmed() {
    this.isModalOpen = false;
  }
}
