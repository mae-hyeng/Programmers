function solution(s) {
    const c = Math.ceil(s.length / 2);
    return s.length % 2 === 0 ? s.substr(c-1, 2) : s.substr(c-1, 1)
}