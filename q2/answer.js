
var fs = require('fs'),
input = process.argv[2],
text = fs.readFileSync(input, 'utf8'),
out = fs.createWriteStream('output.txt', { encoding: 'utf8' });

var countChange = function(coins, m, moneyAmount) {
    // moneyAmount + 1 rows are used as the table is built in bottom-up
    // way using the base case 0 value case (moneyAmount = 0)

    var table = new Array(moneyAmount + 1);

    for (var i = 0; i <= moneyAmount; ++i)
        table[i] = new Array(m + 1);

    // Fills the table for 0 value case (moneyAmount = 0)
    for (i = 1; i <= m; i++)
        table[0][i] = 1;

    // Fills the rest of the table entries in bottom-up way
    for (i = 1; i <= moneyAmount; ++i) {
        table[i][0] = 0;
        for (var j = 1; j <= m; ++j) {
            var value = table[i][j - 1];
            if (coins[j - 1] <= i)
                value += table[i - coins[j - 1]][j];
            table[i][j] = value;
        }
    }
    return table[moneyAmount][m-1];
};

var readMoney = function(coins) {
    var m = coins.length;
    text.split(/\r?\n/).forEach(function (line) {
        if (line) {
            var moneyAmount = parseInt(line.split(/p\b/));
            var change = countChange(coins, m, moneyAmount);
            out.write(change + '\n');
        }
    });
    out.end();
};

var init = function() {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    readMoney(coins);
};

init();