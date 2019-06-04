'use strict'

function daysInYear(year) {
  try {
    if (!Number.isInteger(year)) {
      throw new Error (`exception: year should be an integer`);
    } else {
      let daysInFeb = new Date(year, 1, 29).getDate();
      if (daysInFeb === 29) {
        return 366
      }
      return 365
    }
  } catch(error) {
    return error.message;
  }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
