function solution(s, n) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt();
        if (s[i] === " ") result += s[i];
        else if (code <= 90) {
            if (code + n > 90) code -= 26;
            result += String.fromCharCode(code + n);
        } else if (code <= 122) {
            if (code + n > 122) code -= 26;
            result += String.fromCharCode(code + n);
        }
    }
    return result;
}