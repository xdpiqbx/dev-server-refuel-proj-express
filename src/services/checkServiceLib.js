const lastDayOfMonth = require('date-fns/lastDayOfMonth');

module.exports = {
  getFirstAndLastDaysOfMonth: (year, month) => {
    const startDate = new Date();
    const endDate = new Date();
    const firstDay = 1;
    const utc_offset = Math.abs(endDate.getTimezoneOffset());

    startDate.setHours(0);
    startDate.setMinutes(utc_offset);
    startDate.setSeconds(0);
    startDate.setDate(firstDay);
    startDate.setMonth(month);
    startDate.setFullYear(year);

    const lastDay = lastDayOfMonth(startDate).getDate();

    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);
    endDate.setDate(lastDay);
    endDate.setMonth(month);
    endDate.setFullYear(year);

    endDate.setMinutes(endDate.getMinutes() + utc_offset);

    return { startDate, endDate };
  }
};
