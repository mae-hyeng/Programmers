function solution(n, k) {
    return Array(n - k + 1).fill(k).map((i, idx) => i + idx).filter(j => j % k === 0);
}