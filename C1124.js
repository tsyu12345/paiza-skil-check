process.stdin.resume();
process.stdin.setEncoding('utf8');

function countCanEatMelon(netaList) {
    let ate = 0;
    let canEat = true;
    for(let i = 1; i <= netaList.length; i++) {
        if(netaList[i-1] === 'melon' && canEat) {
            ate++;
            canEat = false;
        }
        if(i % 10 === 0 && canEat === false) {
            canEat = true;
        }
    }
    return ate;
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
    const T = parseInt(lines[0]);
    let netaList = [];
    for (let i = 1; i < T; i++) {
        netaList.push(lines[i]);
    }
    console.log(countCanEatMelon(netaList));


});