function solution(arr1, arr2) {    
    const [arl1, arl2] = [arr1.length, arr2.length];
    if (arl1 !== arl2) {
        return arl1 > arl2 ? 1 : -1;
    } else {
        const red1 = arr1.reduce((a, b) => a += b, 0);
        const red2 = arr2.reduce((a, b) => a += b, 0);
        if (red1 === red2) return 0;
        else return red1 > red2 ? 1 : -1;
    }
}