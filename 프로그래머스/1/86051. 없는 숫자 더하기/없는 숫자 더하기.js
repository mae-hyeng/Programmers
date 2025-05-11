function solution(numbers) {
    let sum = 45;
    numbers.map(a => sum -= a)
    return sum;
}