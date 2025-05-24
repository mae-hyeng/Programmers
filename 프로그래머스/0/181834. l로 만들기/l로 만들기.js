function solution(myString) {
    return [...myString].map(ms => ms.localeCompare("l") === -1 ? ms = "l" : ms).join("")
}