function solution(x, y, n) {
    const s = new Set();
    const q = [[x, 0]];
    let i = 0;

    while (i < q.length) {
        const [current, count] = q[i++];

        if (current === y) return count;

        const values = [current + n, current * 2, current * 3];

        for (const v of values) {
            if (v <= y && !s.has(v)) {
                s.add(v)
                q.push([v, count + 1]);
            }
        }
    }

    return -1;
}