function solution(n) {
    const [max, min] = [Math.max(n, 6), Math.min(n, 6)];
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    return n / gcd(max, min);
}