function solution(arr) {
    // while (arr.length & arr.length - 1) {
    //     arr.push(0);
    // }
    // return arr;
    while (Math.log2(arr.length) % 1 !== 0) {
        arr.push(0);
    }
    return arr;
}