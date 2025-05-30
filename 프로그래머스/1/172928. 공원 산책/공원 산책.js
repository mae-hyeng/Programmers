function solution(park, routes) {
    let x = park.findIndex((p) => p.includes("S"));
    let y = park[x].indexOf("S");

    routes.forEach((r) => {
        let [op, n] = r.split(" ");
        n = +n;
        if (op === "E") {
            for (let i = 1; i <= n; i++) {
                if (!park[x][y + i] || park[x][y + i] === "X") return;
            }
            y += n;
        } else if (op === "W") {
            for (let i = 1; i <= n; i++) {
                if (!park[x][y - i] || park[x][y - i] === "X") return;
            }
            y -= n;
        } else if (op === "S") {
            for (let i = 1; i <= n; i++) {
                if (!park[x + i] || !park[x + i][y] || park[x + i][y] === "X") return;
            }
            x += n;
        } else {
            for (let i = 1; i <= n; i++) {
                if (!park[x - i] || !park[x - i][y] || park[x - i][y] === "X") return;
            }
            x -= n;
        }
    });
    return [x, y];
}