function solution(n) {
    return [...Array(n)].map((i, idx) => i = idx + 1).reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0)
}