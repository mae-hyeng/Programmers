const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    [str, num] = line.split(' ');
}).on('close', function () {
    console.log(str.repeat(num))
});