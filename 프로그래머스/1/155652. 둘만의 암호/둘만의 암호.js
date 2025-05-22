function solution(s, skip, index) {
    return [...s].map((i) => {
        let charCode = i.charCodeAt();
        for (let n = 0; n < index; n++) {
            charCode = charCode + 1 > 122 ? 97 : charCode + 1;
            while (skip.includes(String.fromCharCode(charCode))) {
                charCode = charCode + 1 > 122 ? 97 : charCode + 1;
            }
        }
        return String.fromCharCode(charCode);
    })
    .join("");
}