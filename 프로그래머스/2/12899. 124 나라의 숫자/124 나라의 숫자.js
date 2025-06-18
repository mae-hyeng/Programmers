function solution(n) {
    let num = "";
    let m;

    while (n != 0) {
        m = n % 3;
        n = Math.floor(n / 3);

        if (m === 0) {
            num = "4" + num;
            n--;
        }
        else if (m === 1) num = "1" + num;
        else if (m === 2) num = "2" + num;
    }
    return num;
}