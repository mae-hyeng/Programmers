function solution(n, m, section) {
    let result = 0;
    let list = Array(n).fill(1);
    section.forEach((s) => list[s-1] = 0);
    while (list.includes(0)) {
        const idx = list.indexOf(0);
        list.fill(1, idx, idx + m);
        result++;
    }
    return result;
}