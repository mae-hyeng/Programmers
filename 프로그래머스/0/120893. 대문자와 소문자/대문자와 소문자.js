function solution(my_string) {
    return [...my_string].map(ms => {
        let charCode = ms.charCodeAt();
        if (65 <= charCode && charCode <= 90) charCode += 32
        else charCode -= 32;
        return String.fromCharCode(charCode);
    }).join("")
}