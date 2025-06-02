function solution(numbers, hand) {
    let tel = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#": [3, 2]
    };
    let result = ""
    let left = "*";
    let right = "#";
    
    const put = (v, num) => {
        v === "L" ? left = num : right = num;
        result += v;
    }
    
    for (let num of numbers) {
        if ([1, 4, 7].includes(num)) {
            put("L", num);
        } else if ([3, 6, 9].includes(num)) {
            put("R", num);
        } else {
            const [lx, ly] = tel[left];
            const [rx, ry] = tel[right];
            const [nx, ny] = tel[num];

            const l = Math.abs(lx - nx) + Math.abs(ly - ny);
            const r = Math.abs(rx - nx) + Math.abs(ry - ny);

            if (l < r) put("L", num);
            else if (r < l) put("R", num);
            else hand === "left" ? put("L", num) : put("R", num);
        }
    }
    return result;
}