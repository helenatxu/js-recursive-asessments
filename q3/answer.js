
var fs = require('fs');
var input = process.argv[2];
var text = fs.readFileSync(input, 'utf8');
var out = fs.createWriteStream('q3/output.txt', { encoding: 'utf8' });
var moment = require('moment');


// var countMondays = function(date) {
//     blablabla.forEach(function (date) {
//         console.log('date: ', date);

//         out.write(number + '\n');
//     });
//     out.end();
// };

var countMondays = function(currentMonth, currentDate, mondaysCount) {
    console.log('currentDate.month: ', currentDate.month());
    console.log('currentMonth: ', currentMonth);
    console.log('mondaysCount: ', mondaysCount);
    console.log('currentDate: ', currentDate.format('DD/MM/YYYY'));
    console.log('--------: ');
    if (currentDate.month() == currentMonth) {
        mondaysCount++;
        return countMondays(currentMonth, currentDate.weekday(7), mondaysCount);
    } else {
        return mondaysCount;
    }
};

var getDates = function() {
    text.split(/\r?\n/).forEach(function (line) {
        var range = line.split(/\s/);
        // console.log('line: ', line);
        console.log('range: ', range);

        var initDate = moment().date(7).month(range[0]).year(range[1]).isoWeekday(1);
        var endDate = moment().date(7).month(range[2]).year(range[3]).isoWeekday(1);
        console.log('initDate: ', initDate.format('DD/MM/YYYY'));
        console.log('endDate: ', endDate.format('DD/MM/YYYY'));

        // setToMonday
        // var initMonday = initDate

        var currentDate = initDate;
        var mondaysCount = 0;

        var result = countMondays(initDate.month(), currentDate, mondaysCount);
        console.log('result::: ', result);
        console.log('____________________________________');
    });
};

getDates();

