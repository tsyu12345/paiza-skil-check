process.stdin.resume();
process.stdin.setEncoding('utf8');

function GameScoreCalculation(btn_length, upper_miss_cnt, log_array) {
    let exact_cnt = 0;
    let miss_cnt = 0;
    let CorrectButtonNumber = 1;
    //console.log(typeof(log_array[0]));
    for(let i = 0; i < log_array.length; i++) {
        if(log_array[i] === CorrectButtonNumber) {
            exact_cnt++;
        } else {
            miss_cnt++;
        }
        if(miss_cnt === upper_miss_cnt) {
            return -1;
        }
        CorrectButtonNumber++;
        if(CorrectButtonNumber > btn_length) {
            CorrectButtonNumber = 1;
        }
    }
    return exact_cnt * 1000;
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
    let n = parseInt(datas[0]);
    let y = parseInt(datas[1]);
    let m = parseInt(lines[1]);
    let log_array_str = lines[2].split(" ");
    let log_array = [];
    for(let i = 0; i < m; i++) {
        log_array.push(parseInt(log_array_str[i]));
    }
    const result = GameScoreCalculation(n, y, log_array);
    console.log(result);
});