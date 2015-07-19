
var fs = require('fs');
var input = process.argv[2];
var text = fs.readFileSync(input, 'utf8');
var out = fs.createWriteStream('q1/output.txt', { encoding: 'utf8' });

var readWords = function() {
    var count = 0;
    text.split(/\r?\n/).forEach(function (line) {
        var paragraphArray = line.split(/\s/);
        var reverseParagraphArray = paragraphArray.reverse();
        var newParagraphString = reverseParagraphArray.join(' ');
        out.write(newParagraphString + '\n');
    });
    out.end();
};

readWords();
