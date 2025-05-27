function solution(n) {
    let arr = Array(n).fill().map((_, idx) => idx + 1);
    let num = 0;
    return arr.map((ar) => {
        let n = ar + num;
        while (n % 3 === 0 || String(n).includes(3)) {
            if (n % 3 === 0) num++;
            else if (String(n).includes(3)) num++;
            n += 1;
        }
        return ar + num;
    })[n - 1];
}