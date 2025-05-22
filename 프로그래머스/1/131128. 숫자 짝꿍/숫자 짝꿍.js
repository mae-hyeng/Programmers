function solution(X, Y) {
    let result = "";
    let x = {};
    let y = {};
    
    for (let c of X) {
        x[c] = (x[c] || 0) + 1;
    }
    
    for (let c of Y) {
        y[c] = (y[c] || 0) + 1;
    }
    
    for (let c in x) {
        if (y[c]) {
            let count = Math.min(x[c], y[c]);
            result += c.repeat(count);
            // result.push(...Array(count).fill(c));
        }
    }
    
    if (result.length === 0) return "-1";
    if (result.replaceAll("0", "").length === 0) return "0";
    return [...result].sort().reverse().join("");
}