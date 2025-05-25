function solution(s) {
    return s.split(" ").reduce((acc, cur, idx, arr) => {
        return cur === "Z" ? acc -= Number(arr[idx - 1]) : acc += Number(cur);
    }, 0)
}