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
    let n = parseInt(lines[0]);
    let datas = lines[1].split(" ");
    let h = parseInt(datas[0]);
    let w = parseInt(datas[1]);
    console.log((h*w) % n);
});