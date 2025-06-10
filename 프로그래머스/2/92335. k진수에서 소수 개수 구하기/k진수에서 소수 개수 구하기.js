function solution(n, k) {
    const arr = n.toString(k).split("0");
    return arr.filter(a => {
        if (Number(a) < 2) return false;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) return false;
        }
        return true;
    }).length;
}