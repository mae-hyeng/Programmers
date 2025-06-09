function solution(clothes) {
    let pair = {};
    clothes.forEach((c, idx) => pair[c[1]] = (pair[c[1]] || 0) + 1);
    
    const sum = Object.values(pair).reduce((acc, cur) => acc * (cur + 1), 1);
    return sum - 1;
}