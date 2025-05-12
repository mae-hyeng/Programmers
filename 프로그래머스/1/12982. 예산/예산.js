function solution(d, budget) {
    let count = 0;
    let sum = 0;
    d.sort((a, b) => a - b).map(n => sum + n > budget ? sum : (() => {
        count++; sum += n; return sum;
    })());
    return count;
}