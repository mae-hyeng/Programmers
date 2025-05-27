function solution(a, b) {    
    const gcd = (m, n) => n === 0 ? m : gcd(n, m % n);
    let num = b / gcd(a, b);
    
    if (num === 2 || num === 5) return 1;
    
    while (num % 2 === 0) num /= 2;
    while (num % 5 === 0) num /= 5;
    
    return num === 1 ? 1 : 2;
    
}