function solution(n) {
    let count = 0;
    const flag = Math.sqrt(n) % 1 === 0;
    for (let i = 1; i < Math.sqrt(n); i++) {
        n % i === 0 ? count++ : count;
    }
    return flag ? count * 2 + 1 : count * 2;
}