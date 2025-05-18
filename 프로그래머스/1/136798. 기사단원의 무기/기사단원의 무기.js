function solution(number, limit, power) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++;
                if (j !== i / j) count++; 
            }
        }
        sum += (count > limit ? power : count);
    }
    return sum
}