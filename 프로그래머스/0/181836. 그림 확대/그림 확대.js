function solution(picture, k) {
    return picture.map(pic => {
        return [...pic].map(p => Array(k).fill(p).join("")).join("")
    }).flatMap(f => Array(k).fill(f));
}