function solution(k, m, score) {
    let sum = 0;
    let box = [];
    score.sort((a, b) => b - a)
    for (let i = 0; i + m <= score.length; i += m) {
        let box = score.slice(i, i + m);
        sum += Math.min(...box) * m;
    }
    return sum;
}