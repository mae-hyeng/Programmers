function solution(dots) {
    const x = dots.map(f => f.filter((ff, idx) => idx === 0));
    const y = dots.map(f => f.filter((ff, idx) => idx === 1));
    
    const [xMax, xMin] = [Math.max(...x), Math.min(...x)];
    const [yMax, yMin] = [Math.max(...y), Math.min(...y)];
    
    return (xMax - xMin) * (yMax - yMin);
}