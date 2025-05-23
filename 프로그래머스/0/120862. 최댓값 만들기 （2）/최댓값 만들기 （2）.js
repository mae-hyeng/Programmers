function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const f = numbers[0] * numbers[1];
    const l = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return f > l ? f : l;
}