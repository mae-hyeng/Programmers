function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(Array(n).fill().map((a, idx) => i === idx ? 1 : 0));
    }
    return answer;
}