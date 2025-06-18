function solution(priorities, location) {
    let idx = 0;
    let p = priorities.map((p, i) => [p, i]);
    let arr = [];

    while (true) {
        let a = p.shift();
        if (p.some(pp => a[0] < pp[0])) p.push(a);
        else {
            arr.push(a);
            if (arr[idx][1] === location) break;
            else idx++;
        }
    }
    return idx + 1;
}