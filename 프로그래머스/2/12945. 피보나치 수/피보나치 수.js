function solution(n) {
    if (n === 0) return 0;
    
    let f1 = 0;
    let f2 = 1;
    let s = 0;
    
    for (let i = 2; i <= n; i++) {
        s = (f1 + f2) % 1234567
        f1 = f2;
        f2 = s;
    }
    return f2;
}