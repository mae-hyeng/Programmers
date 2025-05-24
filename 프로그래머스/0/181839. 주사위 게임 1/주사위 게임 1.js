function solution(a, b) {
    const [holA, holB] = [a % 2 === 1, b % 2 === 1];
    if (holA && holB) return a**2 + b**2;
    else if (holA || holB) return 2 * (a + b);
    else return Math.abs(a - b);
}