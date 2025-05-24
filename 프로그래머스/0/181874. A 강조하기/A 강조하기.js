function solution(myString) {
    return [...myString].map(ms => ms === "a" ? ms.toUpperCase() : ms === "A" ? ms : ms.toLowerCase()).join("");
}