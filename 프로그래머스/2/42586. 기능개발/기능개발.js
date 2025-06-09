function solution(progresses, speeds) {
    const remaining = progresses.map((pro, idx) => {
        const speed = speeds[idx];
        let day = 0;
        while (pro < 100) {
            pro += speed;
            day++;
        }
        return day;
    });
    
    let result = [];
    let prevMax = remaining[0];
    let c = 1;
    for (let i = 1; i < remaining.length; i++) {
        if (prevMax >= remaining[i]) c++;
        else {
            prevMax = remaining[i];
            result.push(c);
            c = 1;
        }
    }
    result.push(c);
    return result;
}