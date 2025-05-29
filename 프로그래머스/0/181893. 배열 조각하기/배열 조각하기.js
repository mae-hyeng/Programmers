function solution(arr, query) {
    query.forEach((q, idx) => {
        if (idx % 2 === 0) {
            arr.splice(q + 1);
        } else {
            arr.splice(0, q);
        }
    });
    return arr;
}