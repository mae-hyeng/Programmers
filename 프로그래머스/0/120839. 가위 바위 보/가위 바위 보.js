function solution(rsp) {
    const p = {"2" : 0, "0" : 5, "5" : 2};
    return [...rsp].map(r => p[r]).join("");
}