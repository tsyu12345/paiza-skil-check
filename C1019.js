process.stdin.resume();
process.stdin.setEncoding('utf8');

function judgePermission(password, input) {
    if(password === input) {
        return false;
    } else {
        for(let i = 0; i < input.length; i++) {
            if(password.indexOf(input[i]) < 0) {
                return false;
            }
        }
        return true;
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
    let s = lines[0];
    let t = lines[1];
    let allow = judgePermission(s, t);
    if(allow) {
        console.log('YES');
    } else {
        console.log('NO');
    }
});