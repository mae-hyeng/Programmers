function solution(num, total) {
    const d = Array(num - 1).fill().map((i, idx) => idx + 1).reduce((acc, cur) => acc += cur, 0);
    
    const startNum = (total - d) / num;
    return Array(num).fill(startNum).map((i, idx) => i + idx);
}