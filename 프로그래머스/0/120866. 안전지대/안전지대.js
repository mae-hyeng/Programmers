function solution(board) {
    let arr = JSON.parse(JSON.stringify(board));
    const n = board.length;
    const m = board[0].length;
    
    board.forEach((bo, idx) => {
        bo.forEach((b, bidx) => {
            if (b === 1) {
                if (bidx - 1 >= 0 && bo[bidx - 1] === 0) arr[idx][bidx - 1] = 1;
                
                if (bidx + 1 < m && bo[bidx + 1] === 0) arr[idx][bidx + 1] = 1;
                
                if (idx - 1 >= 0) {
                    if (bidx - 1 >= 0) arr[idx - 1][bidx - 1] = 1;
                    if (bidx + 1 < m) arr[idx - 1][bidx + 1] = 1;
                    arr[idx - 1][bidx] = 1;
                }
                
                if (idx + 1 < n) {
                    if (bidx - 1 >= 0) arr[idx + 1][bidx - 1] = 1;
                    if (bidx + 1 < m) arr[idx + 1][bidx + 1] = 1;
                    arr[idx + 1][bidx] = 1;
                }
            }
        });
    })
    return arr.map(ar => ar.filter(ar => !ar).length).reduce((a, c) => a += c, 0);
}