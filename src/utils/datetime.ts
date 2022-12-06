import moment from "moment";

export const getDateInterval = (start: string, end: string) => {
    if(!start){
      start = moment().format("YYYY-MM-DD");
    }
    if(!end){
      end = moment().format("YYYY-MM-DD");
    }
    const startDate = moment(start);
    const endDate = moment(end);
    const isSameDay = startDate.isSame(endDate, "day");
    const isSameMonth = startDate.isSame(endDate, "month");
    const isSameYear = startDate.isSame(endDate, "year");
  
    const startDay = startDate.format("DD");
    const startMonth = startDate.format("MMMM");
    const startYear = startDate.format("YYYY");
    const startTime = startDate.format("HH:mm");
    const endDay = endDate.format("DD");
    const endMonth = endDate.format("MMMM");
    const endYear = endDate.format("YYYY");
    const endTime = endDate.format("HH:mm");
  
    if (isSameDay) {
      return `${startDay} ${startMonth} ${startYear} ${startTime} - ${endTime}`;
    } else if (isSameMonth && isSameYear) {
      return `${startDay} ${startTime} - ${endDay} ${endTime} ${startMonth} ${startYear}`;
    } else if (isSameYear) {
      return `${startDay} ${startMonth} ${startTime} - ${endDay} ${endMonth} ${endTime} ${startYear}`;
    } else {
      return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
    }
  };

  export const getDayInterval = (start: string, end: string) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const isSameDay = startDate.isSame(endDate, "day");
    const isSameMonth = startDate.isSame(endDate, "month");
    const isSameYear = startDate.isSame(endDate, "year");
  
    const startDay = startDate.format("DD");
    const startMonth = startDate.format("MMMM");
    const startYear = startDate.format("YYYY");
    const endDay = endDate.format("DD");
    const endMonth = endDate.format("MMM");
    const endYear = endDate.format("YYYY");
  
    if (isSameDay && isSameMonth && isSameYear) {
      return `${startDay} ${startMonth}`;
    } else if (isSameMonth && isSameYear) {
      return `${startDay} - ${endDay} ${startMonth}`;
    } else if (isSameYear) {
      return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
    } else {
      return `${startDay} ${startMonth} ${startYear} - ${endDay} ${endMonth} ${endYear}`;
    }
  }

  export const getTimeInterval = (start: string, end: string) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const startTime = startDate.format("HH:mm");
    const endTime = endDate.format("HH:mm");
    return `${startTime} - ${endTime}`;
  }

  export const getDateTimeInterval = (start: string, end: string) => {
    return {
        dateInterval: getDateInterval(start, end),
        dayInterval: getDayInterval(start, end),
        timeInterval: getTimeInterval(start, end)
    }
  }