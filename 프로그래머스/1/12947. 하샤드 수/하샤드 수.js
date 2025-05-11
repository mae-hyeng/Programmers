function solution(x) {
    let sum = 0;
    (x+"").split("").map(a => sum += parseInt(a))
    return x % sum === 0;
}