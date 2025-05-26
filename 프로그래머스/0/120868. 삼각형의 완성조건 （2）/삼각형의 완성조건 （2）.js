function solution(sides) {
    const max = Math.max(...sides)
    const min = Math.min(...sides);
    const sum = sides.reduce((a, c) => a += c, 0);
    
    let count = (max - (max - min + 1) + 1);
    let aCount = (sum - max - 1);
    
    return count + aCount;
}