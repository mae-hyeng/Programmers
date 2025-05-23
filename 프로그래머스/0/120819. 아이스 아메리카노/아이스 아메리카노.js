function solution(money) {
    const m = Math.floor(money / 5500);
    return [m, money - 5500 * m];
}