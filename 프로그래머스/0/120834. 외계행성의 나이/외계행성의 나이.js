function solution(age) {
    return [...String(age)].map(a => String.fromCharCode(97 + Number(a))).join("");
}