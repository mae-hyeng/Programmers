function solution(N, stages) {
    let failure = Array(N).fill().map((_, idx) => stages.filter(s => s === idx + 1).length);
    
    let c = stages.length;
    let arr = [];
    
    for (let i = 0; i < N; i++) {
        const f = failure[i]/c;
        c -= failure[i];
        arr.push(f || 0);
    }
    
    return arr.map((v, idx) => ({v, idx})).sort((a, b) => b.v - a.v).map(v => v.idx + 1);
}