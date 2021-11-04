process.stdin.resume();
process.stdin.setEncoding('utf8');

function TransformToCalcFormula(number_str) {
    let array = [];
    for(let i = 0; i < number_str.length; i++) {
        const add_number = parseInt(number_str[i]);
        array.push(add_number);
    }
    return array;
}

function OneRankCalculation(number_array) {
    let sum = 0;
    for(let i = 0; i < number_array.length; i++) {
        sum += number_array[i];
    }
    let sum_str = sum.toString();
    let result = sum_str[sum_str.length-1];
    //console.log(result);
    return result;
}

function ScoreBattle(bob_score, alice_score) {
    let bob = OneRankCalculation(TransformToCalcFormula(bob_score));
    let alice = OneRankCalculation(TransformToCalcFormula(alice_score));
    if(bob > alice) {
        return 'Bob';
    } else if(bob < alice) {
        return 'Alice';
    } else {
        return 'Draw';
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
    let datas = lines[0].split(" ");
    let bob_score = datas[0];
    let alice_score = datas[1];
    const result = ScoreBattle(bob_score, alice_score);
    console.log(result);
});