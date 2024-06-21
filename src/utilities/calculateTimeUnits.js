export const calculateTimeUnite = startTime => {
  const currentDate = new Date();
  const startDate = new Date(startTime);

  let timePassed = {};

  if (startDate > 0) {
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();
    let hours = currentDate.getHours() - startDate.getHours();
    let minutes = currentDate.getMinutes() - startDate.getMinutes();
    let seconds = currentDate.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      hours--;
    }
    if (days < 0) {
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    let totalDays = years * 365 + months * 30 + days;
    let weeks = Math.floor(totalDays / 7); // Get weeks

    if (weeks > 4) {
      months++; // Increment months
      weeks = 0; //ReStart week
    } else {
      weeks = Math.floor(totalDays / 7);
    }

    timePassed = {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  for (let unit in timePassed) {
    if (timePassed[unit] < '01') {
      timePassed[unit] = '0' + '0';
    } else if (timePassed[unit] < 10) {
      timePassed[unit] = '0' + timePassed[unit];
    }
  }
  return timePassed;
};
