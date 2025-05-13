function solution(s) {
    let loc = 0;
    return s.split("").map((i,idx) => {
        loc = s.slice(0, idx).split("").lastIndexOf(i);
        return loc < 0 ? loc : idx - loc;
    })
}