function solution(s) {
    let loc = 0;
    let result = [];
    s.split("").map((i,idx) => {
        loc = s.slice(0, idx).split("").lastIndexOf(i);
        result.push(loc < 0 ? loc : idx - loc)
    })
    return result;
}