function solution(n) {
    let sum = 0;
    if (n >= 2) { sum++; }
    for (let i = 3; i <= n; i += 2) {
        let dec = true;
        for (let j = 3; j <= Math.sqrt(i); j += 2) {
            if (i % j === 0) {
                dec = false;
                break;
            }
        }
        if (dec) sum++;
    }
    return sum;
}