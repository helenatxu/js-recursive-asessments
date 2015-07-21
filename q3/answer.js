var fs = require('fs'),
input = process.argv[2],
text = fs.readFileSync(input, 'utf8'),
out = fs.createWriteStream('q3/output.txt', { encoding: 'utf8' }),
moment = require('moment');

var countMondays = function(currentMonth, currentDate, mondaysCount) {
    if (currentDate.month() == currentMonth) {
        mondaysCount++;
        return countMondays(currentMonth, currentDate.weekday(7), mondaysCount);
    }
    return mondaysCount;
};

var countMonths = function(initDate, endDate, monthsCount) {
    if (initDate.isAfter(endDate)) {
        return monthsCount;
    }

    var totalMondays = countMondays(initDate.month(), initDate, 0);
    if (totalMondays === 5) {
        monthsCount++;
    }
    return countMonths(initDate, endDate, monthsCount);
};

var setToFirstSunday = function(month, year) {
    return moment().date(1).month(month).year(year).isoWeekday(7);
};

var getDates = function() {
    text.split(/\r?\n/).forEach(function (line) {
        var range = line.split(/\s/),
        initDate = setToFirstSunday(range[0],range[1]),
        endDate = setToFirstSunday(range[2],range[3]);

        var result = countMonths(initDate, endDate, 0);
        out.write(result + '\n');
    });
    out.end();
};

getDates();
