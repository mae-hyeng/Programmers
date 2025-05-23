function solution(hp) {
    let result = 0;
    while (hp !== 0) {
        if (hp / 5 >= 1) {
            result += Math.floor(hp / 5);
            hp %= 5;
        } else if (hp / 3 >= 1) {
            result += Math.floor(hp / 3);
            hp %= 3;
        } else {
            result += hp / 1;
            hp %= 1
        }
    }
    return result;
}