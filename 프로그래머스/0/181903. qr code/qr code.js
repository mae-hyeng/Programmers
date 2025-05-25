function solution(q, r, code) {
    return [...code].filter((c, idx) => idx % q === r).join("");
}