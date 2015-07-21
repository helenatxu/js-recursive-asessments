var fs = require('fs'),
input = process.argv[2],
text = fs.readFileSync(input, 'utf8'),
out = fs.createWriteStream('output.txt', { encoding: 'utf8' });

var readWords = function() {
    text.split(/\r?\n/).forEach(function (line) {
        var paragraphArray = line.split(/\s/);
        var reverseParagraphArray = paragraphArray.reverse();
        var newParagraphString = reverseParagraphArray.join(' ');
        out.write(newParagraphString + '\n');
    });
    out.end();
};

readWords();
