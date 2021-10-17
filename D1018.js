process.stdin.resume();
process.stdin.setEncoding('utf8');

function taiseki(r1, r2) {
    return Math.pow(r1, 3) - Math.pow(r2, 3);
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
   rs = lines[0].split(" ");
   r1 = parseInt(rs[0]);
   r2 = parseInt(rs[1]); 
   console.log(taiseki(r1, r2));
});