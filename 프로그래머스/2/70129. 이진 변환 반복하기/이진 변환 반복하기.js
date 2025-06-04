function solution(s) {
    let trans = 0;
    let zero = 0;
    while (s !== "1") {
        zero += [...s].filter(sz => sz === "0").length;
        trans++;
        
        const zl = s.replaceAll("0", "").length;
        s = zl.toString(2);
    }
    
    return [trans, zero];
}