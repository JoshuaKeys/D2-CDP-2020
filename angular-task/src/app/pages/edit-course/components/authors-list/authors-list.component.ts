import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit, OnChanges {
  @Input('items') items: Array<string>;
  @Input('activeItem') activeItem: string;
  @Output('itemSelected') itemSelected = new EventEmitter<string>();
  selectedIndex: number;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges) {
    this.selectedIndex = undefined;
    const idx = this.items.findIndex(item=> item === this.activeItem);
    if(idx > -1){
      this.selectedIndex = idx;
    }
  }
  selectItem(idx: number) {
    this.selectedIndex = idx;

    this.itemSelected.emit(this.items[idx]);
  }
}
