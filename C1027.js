process.stdin.resume();
process.stdin.setEncoding('utf8');

function calcHrizontallength(papersData, onePaperLength) {
    let length = onePaperLength;
    for (var i = 0; i < papersData.length; i++) {
        length += onePaperLength - papersData[i];
    }
    return length;
}

function calcField(h, v) {
    return h * v;
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
    let firstDatas = lines[0].split(" ");
    let n = parseInt(firstDatas[0]);
    let d = parseInt(firstDatas[1]);
    let papersData = [];
    for(let i = 1; i < n; i++) {
        papersData.push(parseInt(lines[i]));
    }
    let hri = calcHrizontallength(papersData, d);
    let vartical = d;
    let result = calcField(hri, vartical);
    console.log(result);


});