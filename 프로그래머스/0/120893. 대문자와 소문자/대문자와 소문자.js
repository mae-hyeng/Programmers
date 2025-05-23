function solution(my_string) {
    return [...my_string].map(ms => ms === ms.toLowerCase() ? ms.toUpperCase() : ms.toLowerCase()).join("")
}