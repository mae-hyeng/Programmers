function solution(dirs) {
    let moves = new Set();
    let x = 0;
    let y = 0;
    
    [...dirs].forEach(d => {
        let str = "";
        switch (d) {
            case "L" :
                if (x === -5) break;
                x -= 0.5;
                str = `${x}, ${y}`;
                if (!moves.has(str)) moves.add(str);
                x -= 0.5;
                break;
            case "R" :
                if (x === 5) break;
                x += 0.5;
                str = `${x}, ${y}`;
                if (!moves.has(str)) moves.add(str);
                x += 0.5;
                break;
            case "U" :
                if (y === 5) break;
                y += 0.5;
                str = `${x}, ${y}`;
                if (!moves.has(str)) moves.add(str);
                y += 0.5;
                break;
            case "D" :
                if (y === -5) break;
                y -= 0.5;
                str = `${x}, ${y}`;
                if (!moves.has(str)) moves.add(str);
                y -= 0.5;
                break;
            default : break;
        }
    });
    
    return moves.size;
}