function solution(s) {
    const e = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    e.forEach((i, idx) => {
        while(s.includes(i)) {
            s = s.replace(i, idx);
        }
    });
    
    return Number(s);
}