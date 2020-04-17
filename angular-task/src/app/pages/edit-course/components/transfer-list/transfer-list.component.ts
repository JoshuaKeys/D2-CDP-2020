import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> TransferListComponent),
      multi: true
    },
  ]
})
export class TransferListComponent implements OnInit, ControlValueAccessor {
  @Input('allAuthors') allAuthors: Array<string>;
  @Input('form') form: FormGroup;
  rightItems: Array<string>;
  leftItems: Array<string>;
  selectedItem: string;
  constructor() { }
  onChange: (items: Array<string>)=> void;
  writeValue(value: Array<string>) {
    if(value) {
      this.rightItems = value;
      this.leftItems = this.allAuthors.filter((item)=> value.findIndex(valueItem=> item === valueItem) === -1 )
    }else {
      this.rightItems = [];
      this.leftItems = this.allAuthors;
    }

  }
  add(){
    const idx = this.rightItems.indexOf(this.selectedItem);
    if(idx > -1) {
      return;
    }
    if(idx === -1 && this.selectedItem) {
      const leftIdx = this.leftItems.indexOf(this.selectedItem);
      this.rightItems.push(this.selectedItem);
      this.leftItems.splice(leftIdx, 1);
      this.onChange(this.rightItems);
      this.selectedItem = undefined;
    }
  }
  remove(){
    let idx = this.rightItems.indexOf(this.selectedItem);
    if(idx > -1) {
      this.rightItems.splice(idx, 1);
      console.log(this.rightItems);
      this.leftItems.push(this.selectedItem);
      this.onChange(this.rightItems);
      this.selectedItem = undefined;
      return;
    }
    this.selectedItem = undefined;
  }
  rightItemSelected(item){
    this.selectedItem = item;
    console.log(item);
  }
  leftItemSelected(item) {
    this.selectedItem = item;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {

  }
  setDisabledState() {

  }
  ngOnInit() {
  }

}
