function solution(arr) {
    let ai = 0;
    let stk = [];
    while (ai !== arr.length) {
        if (!stk.length) stk.push(arr[ai]);
        else {
            if (stk[stk.length - 1] === arr[ai]) stk.pop();
            else stk.push(arr[ai]);
        }
        ai++;
    }
    return stk.length ? stk : [-1];
}