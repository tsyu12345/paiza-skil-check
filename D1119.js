process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
   let inputs = lines[0].split(' ');
   const t = parseInt(inputs[0]);
   const u = parseInt(inputs[1]);
   console.log(t - u);
});