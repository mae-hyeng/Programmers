function solution(arr, queries) {
    const flatQuer = queries.map(([s, e]) => {
        return Array.from({length : e - s + 1}, (q, idx) => s + idx)
    }).flatMap(q => q);
    
    return arr.map((a, idx) => {
        const count = flatQuer.filter(f => f === idx).length;
        return a += count;
    })
}