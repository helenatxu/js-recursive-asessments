var fs = require('fs');
var input = process.argv[2];
var text = fs.readFileSync(input, 'utf8');
var out = fs.createWriteStream('q4/output.txt', { encoding: 'utf8' });

var removeDuplicates = function(arr){
    var exists = {},
    cleanedArray = [],
    item;

    for(var i = 0; i < arr.length; i++){
        item = arr[i];
        if(!exists[item]){
            cleanedArray.push(item);
            exists[item] = true;
        }
    }
    return cleanedArray;
};

var getRange = function() {
    text.split(/\r?\n/).forEach(function (line) {
        var range = line.split(/\s/).map(Number),
        base = range[0],
        power = range[1],
        powerArray = [];

        for(var x = base; x <= power; x++){
            for(var y = base; y <= power; y++){
                powerArray.push(Math.pow(x, y));
            }
        }

        var result = removeDuplicates(powerArray).length;
        out.write(result + '\n');
    });
    out.end();
};

getRange();