import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime'
})
export class NumberToTimePipe implements PipeTransform {

  transform(value: number) {
    let dateStr = '';
    let hours = Math.trunc(value / 60);
    let mins = value % 60;
    if (hours == 1) {
      dateStr += hours + ' Hour'
    } else if (hours > 1) {
      dateStr += hours + ' Hours'
    }
    if (mins > 0) {
      dateStr += ' ' + mins + ' min'
    }
    return dateStr.trim();
  }

}
