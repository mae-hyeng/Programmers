const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
}).on('close', function () {
    let str = ""
    for (let i of input) {
        if (i === i.toLowerCase()) str += i.toUpperCase()
        else str += i.toLowerCase()
    }
    console.log(str)
});