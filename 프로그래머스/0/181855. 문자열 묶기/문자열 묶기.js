function solution(strArr) {
    let sorted = {};
    strArr.map(s => s.length).forEach(i => {
        sorted[i] = (sorted[i] || 0) + 1;
    });
    return Math.max(...Object.values(sorted));
}