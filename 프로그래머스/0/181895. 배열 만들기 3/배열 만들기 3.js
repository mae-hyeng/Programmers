function solution(arr, intervals) {
    const ar1 = [];
    const ar2 = [];
    
    intervals.forEach((i, idx) => {
        arr.filter((a, aidx) => {
            if (aidx >= i[0] && aidx <= i[1]) {
                if (idx === 0) ar1.push(a);
                else ar2.push(a)
            }
        })
    })
    
    return ar1.concat(ar2);
}