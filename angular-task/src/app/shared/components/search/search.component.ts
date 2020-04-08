import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('onFilter') filter = new EventEmitter<string>();
  searchTerm: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.filter.emit(this.searchTerm);
  }
}
