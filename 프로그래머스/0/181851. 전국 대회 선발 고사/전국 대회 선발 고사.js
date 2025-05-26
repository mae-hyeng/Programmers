function solution(rank, attendance) {
    const filter = [...rank.filter((r, idx) => attendance[idx]).sort((a, b) => a - b)].slice(0, 3);
    return filter.reduce((acc, cur, idx) => {
        const i = rank.indexOf(cur);
        if (idx === 0) return acc += i * 10000;
        else if (idx === 1) return acc += i * 100;
        else return acc += i;
    }, 0);
    
}