function solution(myString, pat) {
    return [...myString].map(ms => ms === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0;
}