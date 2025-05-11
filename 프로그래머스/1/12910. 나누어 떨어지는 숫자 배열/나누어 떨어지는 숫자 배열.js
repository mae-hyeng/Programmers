function solution(arr, divisor) {
    const sorted = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
    return sorted.length ? sorted : [-1]
}