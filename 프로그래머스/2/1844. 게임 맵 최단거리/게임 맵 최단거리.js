function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    let visited = Array(n).fill().map(a => Array(m).fill(false));
    let queue = [];
    
    const direc = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    
    while(queue.length > 0) {
        const [x, y, distance] = queue.shift();
        
        if (x === n - 1 && y === m - 1) return distance;
        
        for (let i = 0; i < direc.length; i++) {
            const nx = x + direc[i][0];
            const ny = y + direc[i][1];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m
               && maps[nx][ny] === 1
               && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}