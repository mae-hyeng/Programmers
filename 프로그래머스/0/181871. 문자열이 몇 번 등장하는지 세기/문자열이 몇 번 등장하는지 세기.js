function solution(myString, pat) {
    return [...myString].map((ms, idx) => myString.slice(idx, idx + pat.length)).filter(ms => ms === pat).length;
}