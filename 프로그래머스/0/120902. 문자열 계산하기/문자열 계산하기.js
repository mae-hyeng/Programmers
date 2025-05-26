function solution(my_string) {
    const ms = my_string.split(" ");
    const [a, oper, b] = ms
    return ms.reduce((acc, cur, idx, arr) => {
        return cur === "+"
            ? acc += Number(arr[idx + 1])
            : cur === "-"
                ? acc -= Number(arr[idx + 1])
                : acc;
    }, Number(ms[0]));
}