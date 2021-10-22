process.stdin.resume();
process.stdin.setEncoding('utf8');

function calc_tax(income) {
    let tax = 0;
    let tax_rate;
    let over_income = false;
    
    if(income <= 100000) {
        tax = 0;
        return tax;
    }
    if(income-750000 > 0) {
        over_income = true;
    }
    tax_rate = 0.1;
    tax += parseInt(750000 * tax_rate);
    if(over_income) {
        tax_rate = 0.2;
        tax += parseInt((income - 750000) * tax_rate);
    }
    return tax;
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
    let income_datas = [];
    for(let i = 0; i < n; i++) {
        const add = parseInt(lines[i+1]);
        income_datas.push(add);
    }
    let tax_sum = 0;
    for(let i = 0; i < income_datas.length; i++) {
        tax_sum += calc_tax(income_datas[i]);
    }
    console.log(tax_sum);

});