function solution(t, p) {
    const tl = t.length;
    const pl = p.length;
    const roop = tl - pl + 1;
    
    let arr = [];
    
    for (let i = 0; i < roop; i++) {
        arr.push(t.substr(i, pl))
    }
    
    return arr.filter(n => parseInt(n) <= p).length;
}