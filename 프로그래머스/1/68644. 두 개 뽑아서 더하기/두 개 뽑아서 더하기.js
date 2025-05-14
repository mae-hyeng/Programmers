function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let plus = numbers[i] + numbers[j];
            answer.includes(plus) ? answer : answer.push(plus);
        }
    }
    return answer.sort((a, b) => a - b);
}