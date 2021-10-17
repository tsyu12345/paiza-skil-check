process.stdin.resume();
process.stdin.setEncoding('utf8');

function remainPassBall(start_ball_logs, passLogs, m) {
    for(let i = 0; i < m; i++) {
        const data_split = passLogs[i].split(" ");
        const thorw_player = parseInt(data_split[0])-1;
        const receive_player = parseInt(data_split[1])-1;
        let throw_ball = parseInt(data_split[2]);
        if(start_ball_logs[thorw_player] < throw_ball) {
            throw_ball = start_ball_logs[thorw_player];
            start_ball_logs[thorw_player] = 0;
        } else {
            start_ball_logs[thorw_player] -= throw_ball;
        }
        start_ball_logs[receive_player] += throw_ball;
    }
    for(let i = 0; i < start_ball_logs.length; i++) {
        console.log(start_ball_logs[i]);
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
    const n = parseInt(lines[0]);
   
    let start_balls = [];
    for(let i = 0; i < n; i++) {
        start_balls.push(parseInt(lines[1+i]));
    }
   
    const m = parseInt(lines[n+1]);
    
    let passBallLog = [];
    for(let i = 0; i < m; i++) {
        const add = lines[n+2+i];
        passBallLog.push(add);
    }
    
    remainPassBall(start_balls, passBallLog, m);
});