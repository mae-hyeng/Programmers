function solution(x, n) {
    return Array(n).fill(0).map((n, idx) => (idx + 1) * x)
}