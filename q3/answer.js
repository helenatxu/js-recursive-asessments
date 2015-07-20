var fs = require('fs');
var input = process.argv[2];
var text = fs.readFileSync(input, 'utf8');
var out = fs.createWriteStream('q3/output.txt', { encoding: 'utf8' });
var moment = require('moment');

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

var setToFirstMonday = function(month, year) {
    return moment().date(7).month(month).year(year).isoWeekday(1);
};

var getDates = function() {
    text.split(/\r?\n/).forEach(function (line) {
        var range = line.split(/\s/);
        var initDate = setToFirstMonday(range[0],range[1]);
        var endDate = setToFirstMonday(range[2],range[3]);

        var result = countMonths(initDate, endDate, 0);
        out.write(result + '\n');
    });
    out.end();
};

getDates();

