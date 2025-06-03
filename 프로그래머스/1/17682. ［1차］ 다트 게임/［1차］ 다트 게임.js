function solution(dartResult) {
    let arr = [];
    const dartReg = dartResult.match(/(\d+|[A-Z#])/g);
    dartReg.forEach((d, idx) => {
        const prev = dartReg[idx - 1];
        if (d === "S") arr.push(prev ** 1);
        else if (d === "D") arr.push(prev ** 2);
        else if (d === "T") arr.push(prev ** 3);
    });
    
    dartResult.split(/\d+[A-Z]/).forEach((a, idx) => {
        if (a === "*") {
            arr[idx - 1] *= 2;
            if (arr[idx - 2]) arr[idx - 2] *= 2;
        }
        if (a === "#") {
            arr[idx - 1] = -arr[idx - 1];
        }
    });
    
    return arr.reduce((acc, cur) => acc += cur, 0);
}