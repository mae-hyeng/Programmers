function solution(numlist, n) {
    const rank = numlist.map((num, idx) => Math.abs(n - num));
    let obj = {};

    numlist.forEach((num, idx) => obj[num] = rank[idx]);
    
    return Object.entries(obj).sort((a, b) => {
        if (a[1] === b[1]) return Number(b[0]) - Number(a[0]);
        else return a[1] - b[1];
    }).map(so => Number(so[0]));  
}