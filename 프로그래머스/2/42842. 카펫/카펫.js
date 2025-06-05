function solution(brown, yellow) {
    for (let i = 1; i <= Math.sqrt(brown + yellow); i++) {
        const yh = i;
        const yw = yellow / yh;
        
        if ((yh + 2) * (yw + 2) === brown + yellow) return [yw + 2, yh + 2];
    }
}