export function formatDurationData(milliseconds: number) {
    console.log(milliseconds);
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