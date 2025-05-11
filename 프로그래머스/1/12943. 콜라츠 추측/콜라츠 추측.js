function solution(num) {
    let re = 0;
    while (num !== 1) {
        if (re > 500) return -1;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        re++;
    }
    return re;
}