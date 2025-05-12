function solution(s) {
    // return /^[0-9]{4}$|^[0-9]{6}$/.test(s);
    return (s.length === 4 || s.length === 6) && !s.split("").map(n => isNaN(Number(n))).includes(true);
}