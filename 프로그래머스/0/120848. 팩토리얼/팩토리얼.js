function solution(n) {
    let c = 1;
    let f = 1;
    while (f * (c + 1) <= n) {
        c++;
        f *= c;
    }
    return c;
}