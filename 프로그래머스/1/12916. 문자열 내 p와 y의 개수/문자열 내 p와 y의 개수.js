function solution(s){
    let p = 0;
    let y = 0;
    let arr = Array(s.length).fill(0).map((i, idx) => s[idx].toLowerCase());
    
    arr.forEach(s => s === "p" ? p++ : s === "y" ? y++ : y)
    
    return p === y;
}