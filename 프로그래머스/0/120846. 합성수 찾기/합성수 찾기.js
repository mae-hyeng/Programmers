function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            i % j === 0 ? count++ : count;
        }
        count > 2 ? result++ : result;
    }
    return result;
}