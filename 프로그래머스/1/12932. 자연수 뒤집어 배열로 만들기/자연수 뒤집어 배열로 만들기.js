function solution(n) {
    return String(n).split("").reverse().map(num => parseInt(num))
}