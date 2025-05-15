function solution(k, score) {
    var answer = [];
    var result = [];
    score.forEach(i => {
        answer.push(i);
        if (answer.length > k) answer.sort((a, b) => a - b).splice(0, 1);
        result.push(answer.sort((a, b) => a - b)[0]);
    })
    return result;
}