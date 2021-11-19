process.stdin.resume();
process.stdin.setEncoding('utf8');

function CoordinateCalculation(add_x, add_y, pre_x, pre_y) {
    let x = pre_x + add_x;
    let y = pre_y + add_y;
    return [x, y];
}

function BubbleXCoordinateMaximum(s_x, s_y, wind_data) {
    let current_x = s_x;
    let current_y = s_y;
    let x_point_data = [];
    x_point_data.push(current_x);
    for(let i = 0; i < wind_data.length; i++) {
        const CoordinateAfterChange = CoordinateCalculation(wind_data[i][0], wind_data[i][1], current_x, current_y);
        current_x = CoordinateAfterChange[0];
        current_y = CoordinateAfterChange[1];
        x_point_data.push(current_x);
        if(current_y <= 0) {
            return Math.max(...x_point_data);
        }
    }
    return Math.max(...x_point_data);
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
   const inputs = lines[0].split(' ');
   const T = parseInt(inputs[0]);
   const x = parseInt(inputs[1]);
   const y = parseInt(inputs[2]);
   let wind_data = [];
   for(let i = 0;  i < T; i++) {
        let add = lines[i+1].split(' ');
        add[0] = parseInt(add[0]);
        add[1] = parseInt(add[1]);
        wind_data.push(add);
   }
   const resultX = BubbleXCoordinateMaximum(x, y, wind_data);
   console.log(resultX);

});