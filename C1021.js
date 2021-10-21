process.stdin.resume();
process.stdin.setEncoding('utf8');

function canMoveConveyor(singou_log, box_log) {
    if(singou_log == box_log) {
        return true;
    } else {
        return false;
    }
}

function calcRemain(box_count , conveyor_box_logs, singou_logs) {
    let remain = box_count;
    let box_index = 0
    for(let i = 0; i < singou_logs.length; i++) {
        //console.log(conveyor_box_logs[box_index]);
        if(canMoveConveyor(singou_logs[i], conveyor_box_logs[box_index])) {
            remain--;
            box_index++;
        }
        
    }
    return remain;
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
    let a = parseInt(datas[1]);
    let b = parseInt(datas[2]);
    let singou_logs = lines[1];
    let a_logs = lines[2];
    let b_logs = lines[3];
    let a_remain = calcRemain(a, a_logs, singou_logs);
    let b_remain = calcRemain(b, b_logs, singou_logs);
    console.log(a_remain.toString() + " " + b_remain.toString());
});
