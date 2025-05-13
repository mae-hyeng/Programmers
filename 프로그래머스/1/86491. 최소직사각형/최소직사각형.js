function solution(sizes) {
    let w = 0
    let h = 0;
    for (let [a, b] of sizes) {
        let [max, min] = a > b ? [a, b] : [b, a];
        w = Math.max(w, max);
        h = Math.max(h, min);
    }
    return w * h;
}