process.stdin.resume();
process.stdin.setEncoding('utf8');




/**
 * 単位時間あたりの速度が制限を超過しているか判定
 * @param {float} speed 
 * @param {int} limit 
 * @returns {boolean}
 */
function SpeedLimitJudgment(speed, limit) {
    if(speed > limit) {
        return true;
    } else {
        return false;
    }
}

/**
 * 速度を計算しリスト化
 * @return {float}
 * @param {Array} datas
 */
function CalcSpeed(datas) {
    let speedArray = [];
    for(let i = 0; i < datas.length; i++) {
        
        for(let j = i+1; j <= datas.length-1; j++) {
           
            const timeRange = Math.abs(datas[i][0] - datas[j][0]);
            const speed = Math.abs(datas[i][1] - datas[j][1]) / timeRange;
            
            speedArray.push(speed);
        }
    }
    return speedArray;
}

function SpeedViolationArrest(datas, limit) {
    const speedArray = CalcSpeed(datas);
    
    for(let i = 0; i < speedArray.length; i++) {
        if(SpeedLimitJudgment(speedArray[i], limit)) {
            console.log("YES");
            return ;
        }
    }
    console.log("NO");
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
   let inputs = lines[0].split(" ");
   const N = parseInt(inputs[0]);
   const V = parseInt(inputs[1]);
   let observationData = [];
   for(let i = 0; i < N; i++) {
       const add = lines[i+1].split(" ");
       add[0] = parseInt(add[0]);
       add[1] = parseInt(add[1]);
       observationData.push(add); //push([t_i, p_i])
   }
    SpeedViolationArrest(observationData, V);


});