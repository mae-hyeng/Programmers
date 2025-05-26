function solution(keyinput, board) {
    const [mx, my] = [(board[0] - 1) / 2, (board[1] - 1) / 2];
    
    return keyinput.reduce(([x, y], cur) => {
        switch(cur) {
            case "down": return [x, Math.abs(y - 1) > my ? y : y - 1];
            case "up": return [x, y + 1 > my ? y : y + 1];
            case "left": return [Math.abs(x - 1) > mx ? x : x - 1, y];
            case "right": return [x + 1 > mx ? x : x + 1, y];
        }
    }, [0,0]);
}