function solution(babbling) {
    const now = ["aya", "ye", "woo", "ma"];
    // 빈배열 return 시키기
    return babbling.filter(b => {
        for (let n of now) {
            b = b.replace(n, " ");
        }
        return b.trim() === "";
    }).length;
}