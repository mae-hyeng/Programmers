function solution(n, lost, reserve) {
    const have = Array(n).fill(1).map((h, hidx) => {
        return lost.includes(hidx + 1) ? 0 : 1;
    });
    
    for (let i = 0; i < reserve.length; i++) {
        const idx = reserve.sort((a, b) => a - b)[i] - 1;
        if (have[idx] === 0) have[idx] = 2;
        else if (have[idx] === 1) {
            if (String(have[idx - 1]) && have[idx - 1] === 0) {
                have[idx - 1] = 2;
            } else if (String(have[idx + 1]) && have[idx + 1] === 0) {
                have[idx + 1] = 2;
            }
        }
    }
    return have.filter(n => n !== 0).length;
}