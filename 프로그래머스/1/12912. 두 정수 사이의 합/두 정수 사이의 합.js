function solution(a, b) {
//     let min = Math.min(a, b);
//     let max = Math.max(a, b);
//     let s = 0;
    
//     for (let i = min; i <= max; i++) {
//         s += i
//     }
    
//     return s
    var result = 0
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}