process.stdin.resume();
process.stdin.setEncoding('utf8');

function multi_junken(fight_datas) {
    for(let i = 0; i < fight_datas.length; i++) {
        const hand = fight_datas[i];
        const other_hands = enemy_hands(i, fight_datas);
        let win_count = 0;
        
        for(let j = 0; j < other_hands.length; j++) {
            win_count += junken(hand, other_hands[i]);   
        }
        if(win_count === 0) {
            return 'draw';
        } else if(win_count >= 1) {
            return hand;
        }
    }
}

function junken(my_hand, enemy_hand) {
    if(my_hand === 'paper') {
        if(enemy_hand === 'rock') {
            return 1;
        } else if(enemy_hand === 'scissors') {
            return -1;
        }
    } else if(my_hand === 'rock') {
        if(enemy_hand === 'scissors') {
            return 1;
        } else if(enemy_hand === 'paper') {
            return -1;
        }
    } else if(my_hand === 'scissors'){
        if(enemy_hand === 'paper') {
            return 1;
        } else if(enemy_hand === 'rock') {
            return -1;
        }
    }
    return 0; //あいこ
    
}

function enemy_hands(myhand_index, fight_datas) {
    let array = [];
    for(let i = 0; fight_datas.length; i++) {
        if(myhand_index !== i) {
            array.push(fight_datas[i]);
        }
    }
    return array;
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
    let n = parseInt(lines[0]);
    let fight_datas = []
    for(let i = 1; i < n; i++) {
        fight_datas.push(lines[i]);   
    }
    let result = multi_junken(fight_datas);
    console.log(result);

});