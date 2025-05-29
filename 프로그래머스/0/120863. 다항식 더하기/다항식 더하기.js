function solution(polynomial) {
    let x = 0;
    let num = 0;
    polynomial.split(" ").forEach(p => {
        if (p.includes("x")) {
            let c = p.replace("x", "");
            x += c === "" ? 1 : Number(c);
        } else {
            if (!p.includes("+")) {
                num += Number(p);
            }
        }
    });
    
    const xPart = x === 0 ? "" : x === 1 ? "x" : `${x}x`;
    const numPart = num === 0 ? "" : `${num}`;
    
    if (xPart && numPart) {
        return `${xPart} + ${numPart}`;
    } else {
        return xPart || numPart;
    }
}