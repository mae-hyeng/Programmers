function solution(participant, completion) {
    let result = ""
    let part = {};
    let comp = {};
    
    for (let p of participant) {
        part[p] = (part[p] || 0) + 1;
    }
    
    for (let c of completion) {
        comp[c] = (comp[c] || 0) + 1;
    }
    
    for (let p in part) {
        if (part[p] !== comp[p]) result += p;
    }
    
    return result;
}