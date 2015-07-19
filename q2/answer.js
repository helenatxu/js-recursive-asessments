
var fs = require('fs');
var input = process.argv[2];
var text = fs.readFileSync(input, 'utf8');
var out = fs.createWriteStream('q2/output.txt', { encoding: 'utf8' });

var countChange = function(coins, m, n) {
    console.log('Params coins = ['+coins+'], m = '+ m+', n = '+n);
    // If n is 0 then there is 1 solution (which is not to include any coin)
    if (n === 0) {
        return 1;
    }

    // If n is less than 0, then 0 solution exists
    if (n < 0) {
        return 0;
    }

    // If there are no coins and n is greater than 0, then 0 solutions exist
    if (m <=0 && n >= 1) {
        return 0;
    }

    // countChange is sum of solutions = including coins[m-1] + excluding coins[m-1]
    return countChange(coins, m-1, n) + countChange(coins, m, n-coins[m-1]);
};

var readMoney = function(coins) {
    var m = coins.length;
    text.split(/\r?\n/).forEach(function (line) {
        var moneyAmount = parseInt(line.split(/p\b/));
        console.log('moneyAmount: ', moneyAmount);
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