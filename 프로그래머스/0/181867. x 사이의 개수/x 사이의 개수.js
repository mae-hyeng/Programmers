function solution(myString) {
    let arr = [];
    let count = 0;
    [...myString].forEach(ms => {
        if (ms !== "x") count++;
        else {
            arr.push(count);
            count = 0;
        }
    });
    return [...arr, count];
}