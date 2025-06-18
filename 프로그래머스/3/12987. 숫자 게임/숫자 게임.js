function solution(A, B) {
    let ws = 0;
    let idx = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    for (let i = 0; i < B.length; i++) {
        if (A[idx] < B[i]) {
            idx++;
            ws++;
        }
    }
    return ws;
}