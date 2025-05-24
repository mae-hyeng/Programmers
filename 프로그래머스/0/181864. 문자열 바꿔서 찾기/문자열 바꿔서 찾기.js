function solution(myString, pat) {
    return [...myString].map(ms => ms === "A" ? ms = "B" : "A").join("").includes(pat) ? 1 : 0;
}