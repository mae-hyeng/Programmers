function solution(n) {
    let tl = n.toString(2).replaceAll(0, "").length;
    let num = n + 1;
    while (num.toString(2).replaceAll(0, "").length !== tl) {
        num++;
    }
    return num;
}