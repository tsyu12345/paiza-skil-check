process.stdin.resume();
process.stdin.setEncoding('utf8');

function judgeWork(taion) {
    if (taion >= 37) {
        console.log("NG");
    } else {
        console.log("OK");
    }
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
   judgeWork(n);
});