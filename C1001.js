process.stdin.resume();
process.stdin.setEncoding('utf8');

function judgeAtari(baisu, player_num) {
    if(player_num % baisu === 0) {
        return true;
    } else {
        return false;
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
    let inputs = lines[0].split(" ")
    let n = parseInt(inputs[0]);
    let x = parseInt(inputs[1]);
    let y = parseInt(inputs[2]);
    for(let i = 1; i <= n; i++) {
        let result = '';
        if(judgeAtari(x, i)) {
            result += 'A';
        }
        if(judgeAtari(y, i)) {
            result += 'B';
        }
        if (result === '') {
            result += 'N';
        }
        console.log(result);
    }

    
});