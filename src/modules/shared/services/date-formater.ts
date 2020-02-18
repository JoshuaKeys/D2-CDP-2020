export class DateFormatter {
    formatDateData(date: Date) {
        let dateStr = date.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '-');
        return dateStr;
    }
    formatDateToDotFormat(date: Date) {
        let dateStr = date.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '.');
        return dateStr;
    }
    formatDotFormatToDate(dotFormat: string) {
        return new Date(dotFormat);
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