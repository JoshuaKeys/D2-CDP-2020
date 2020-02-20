export class DateFormatter {
    formatDateData(date: Date) {
        let dateStr = date.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '-');
        return dateStr;
    }
    formatDateToDotFormat(date: string) {
        let _date = new Date(date);
        let dateStr = _date.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '.');
        return dateStr;
    }
    formatDotFormatToDate(dotFormat: string) {
        return new Date(dotFormat);
    }
    formatDate(dateStr: string) {
        let _date = new Date(dateStr);
  
        let __date = _date.getDate();
        let __month = _date.getMonth() + 1;

        let month = __month < 10 ?  '0'+__month : __month;
        let day = __date < 10 ? '0'+__date : __date;
        let year = _date.getFullYear();
        return `${year}-${month}-${day}`
    }
    formatDurationData(milliseconds: number) {
        let dateStr = '';
        let hours = Math.trunc(milliseconds / 60);
        let mins = milliseconds % 60;
        if(hours >= 1) {
            dateStr += hours + 'hrs'
        }
        if(mins > 0) {
            dateStr += ' ' + mins + 'mins'
        }
        return dateStr.trim();
    }
}