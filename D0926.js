process.stdin.resume();
process.stdin.setEncoding('utf8');

function calcSarary(zikyu, ontime) {
    return zikyu * ontime;
};

let lines = [];
let reader = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

reader.on('line', (line) => {
    lines.push(line);    
});

reader.on('close', () => {
    let result = calcSarary(lines[0], lines[1]);
    console.log(result);
})



