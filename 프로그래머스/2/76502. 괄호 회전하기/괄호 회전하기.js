function solution(s) {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        let str = s;
        while (/\[\]|\(\)|\{\}/.test(str)) {
            str = str.replace(/\[\]|\(\)|\{\}/g, "");
        }
        if (!str.length) c++;
        s = s.at(-1) + s.slice(0, -1);
    }
    return c;
}