function solution(ingredient) {
    let count = 0;
    const prot = [];
    
    for (let i of ingredient) {
        prot.push(i);
        if (prot.length >= 4 && prot.slice(-4).join("") === "1231") {
            prot.splice(-4, 4);
            count++;
        }
    }
    
    return count;
}