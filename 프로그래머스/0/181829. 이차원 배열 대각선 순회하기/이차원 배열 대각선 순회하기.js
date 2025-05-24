function solution(board, k) {
    return board.flatMap((b, bidx) => b.filter((d, didx) => bidx + didx <= k)).reduce((acc, cur) => acc += cur, 0);
}