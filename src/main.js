'use strict';

function daysInYear(year) {

    if (Number.isInteger(year)) {
        let daysInFeb = new Date(year, 1, 29).getDate();
        if (daysInFeb === 29) {
            console.log (366)
        } else {
            console.log (365)
        }
    } else {
        console.log('exception')
    }
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception
