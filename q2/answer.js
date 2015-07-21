
var fs = require('fs'),
input = process.argv[2],
text = fs.readFileSync(input, 'utf8'),
out = fs.createWriteStream('q2/output.txt', { encoding: 'utf8' });

var countChange = function(coins, m, moneyAmount) {
    // If moneyAmount is 0 then there is 1 solution (which is not to include any coin)
    if (moneyAmount === 0) {
        return 1;
    }

    // If moneyAmount is less than 0, then 0 solution exists
    if (moneyAmount < 0) {
        return 0;
    }

    // If there are no coins and moneyAmount is greater than 0, then 0 solutions exist
    if (m <=0 && moneyAmount >= 1) {
        return 0;
    }

    // countChange is sum of solutions = including coins[m-1] + excluding coins[m-1]
    return countChange(coins, m-1, moneyAmount) + countChange(coins, m, moneyAmount-coins[m-1]);
};

var readMoney = function(coins) {
    var m = coins.length;
    text.split(/\r?\n/).forEach(function (line) {
        var moneyAmount = parseInt(line.split(/p\b/));
        var change = countChange(coins, m, moneyAmount);
        out.write(change + '\n');
    });
    out.end();
};

var init = function() {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    readMoney(coins);
};

init();