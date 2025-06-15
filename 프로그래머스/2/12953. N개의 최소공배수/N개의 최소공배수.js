function solution(arr) {
    let num = Math.max(...arr);
    let max = Math.max(...arr);
    while (true) {
        let flag = 0;
        
        arr.forEach(a => {
            if (num % a === 0) flag++;
        })
        
        if (flag === arr.length) break;
        else num += max;
    }
    return num;
}