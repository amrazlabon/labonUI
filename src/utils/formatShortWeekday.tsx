// utils/formatShortWeekday.js
export const formatShortWeekday = (date : any) => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return weekdays[date.getDay()];
  };
  