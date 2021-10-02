process.stdin.resume();
process.stdin.setEncoding('utf8');

function canTravelFammily(fam_len, holuday_range_list) {
    for(let i = 0; i < fam_len-1; i++) {
        let counter = 0;
        let use_list = holuday_range_list[i];
        let comp_list = createCompArray(holuday_range_list, i);
        for(let j = 0; j < comp_list.length; j++) {
            if((comp_list[j][0] >= use_list[0] && comp_list[j][0] <= use_list[1])||(comp_list[j][1] <= use_list[1])) {
                counter += 1;
            }
        }
        if(counter === fam_len-1) {
            console.log("OK");
            return ;
        }
    }
    console.log("NG")
}

function createCompArray(list, use_index) {
    let array = [];
    for(let i = 0; i < list.length; i++) {
        if(i === use_index) {
            continue;
        } else {
            array.push(list[i]);
        }
    }
    return array;
};

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
   let n = parseInt(lines[0]);
   let datalist = [];
   for(let i = 1; i < lines.length; i++) {
       datalist.push(lines[i]);
   }
   canTravelFammily(n, datalist);
});