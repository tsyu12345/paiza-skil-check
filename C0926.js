process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

function judgeCompleate(N, M, result_list) {
    let ans = [];
    for(let i = 0; i < N; i++) {
        num = parseInt(result_list[i]);
        for(let l = 1; l <= M; l++) {
            if(num === l && ans.includes(l) === false) {
                ans.push(l);
                break;
            }
        }
        if(ans.length === M) {
            return i+1;
        }
    }
    return 'unlucky';
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
    let input_NM_str = lines[0].split(' ')
    let N = parseInt(input_NM_str[0]);
    let M = parseInt(input_NM_str[1]);
    let card_list = [];
    for(let i = 1; i < lines.length; i++) {
        card_list.push(lines[i]);
    }
    let result = judgeCompleate(N, M, card_list);
    console.log(result);
});