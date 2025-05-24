function solution(my_string) {
    const ms = new Set([...my_string]);
    return [...ms].join("");
}