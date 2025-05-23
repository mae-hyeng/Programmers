function solution(n) {
    return Array(n).fill().map((_, idx) => idx + 1).filter(num => n % num === 0);
}