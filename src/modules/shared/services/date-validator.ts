export class DateValidator {
    DAYS_IN_MONTH = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    daysInMonth = (year: number, month: number): number | null =>{
        // isValidDate checked that year and month are integers already.
    
        // February of leap years. Assumes that the Gregorian calendar extends
        // infinitely in the future and in the past.
        if (month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
            return 29
        }
    
        // Everything else.
        return this.DAYS_IN_MONTH[month]
    }
    isValidDate =(year: number, month: number, day: number) => {
        const isValidDaysInMonth = this.daysInMonth(year, month);
        if(isValidDaysInMonth) {
            return (
                // Check that year, month and day are integers. Deals with NaN.
                year === Math.round(year) && month === Math.round(month) && day === Math.round(day) &&
                // Any year is valid. Check that month and day are valid.
                month >= 1 && month <= 12 && day >= 1 && day <= isValidDaysInMonth
            )
        }
        return false;
        
    }
}