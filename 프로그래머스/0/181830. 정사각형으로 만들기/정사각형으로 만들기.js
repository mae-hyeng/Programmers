function solution(arr) {
    let arrl = arr.length;
    let arl = arr[arrl - 1].length;
    arr.map(ar => {
        if (arrl > arl) {
            while (arrl !== ar.length) {
                ar.push(0);
            }
        } else if (arl > arrl) {
            while (arrl !== arl) {
                arrl++;
                arr.push(Array(arl).fill(0));
            }
        } else {
            return ar
        }
    })
    return arr;
}