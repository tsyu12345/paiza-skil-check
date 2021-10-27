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
    let datas = lines[0].split(" ");
    let n = parseInt(datas[0]);
    let m = parseInt(datas[1]);
    console.log(n - m);
});