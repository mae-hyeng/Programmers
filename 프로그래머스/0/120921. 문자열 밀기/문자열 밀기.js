function solution(A, B) {
    const arr = [...A];
    let result = [A];
    Array(A.length - 1).fill().map(i => {
        arr.unshift(arr.pop());
        result.push(arr.join(""))
    });
    const idx = result.indexOf(B);
    return idx > -1 ? idx : -1;
}