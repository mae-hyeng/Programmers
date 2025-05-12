function solution(n, m) {
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = n * m / gcd(max, min);
    
    return [gcd(max, min), lcm];
}