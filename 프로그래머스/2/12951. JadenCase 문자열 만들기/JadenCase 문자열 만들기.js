function solution(s) {
    return s.split(" ").map(ss => [...ss].map((sss, idx) => {
        if (idx === 0) return sss.toUpperCase();
        else return sss.toLowerCase();
    }).join("")).join(" ");
}