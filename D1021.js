process.stdin.resume();
process.stdin.setEncoding('utf8');

function centiToMili(cm) {
    return cm * 10;
}

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    let n = parseInt(lines[0]);
    let result = centiToMili(n);
    console.log(result); 
});