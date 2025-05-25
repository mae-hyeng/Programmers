function solution(i, j, k) {
    const str = Array.from({length : j - i + 1}, (a, idx) => idx + i).join("");
    return [...str].filter(s => s === String(k)).length;
}