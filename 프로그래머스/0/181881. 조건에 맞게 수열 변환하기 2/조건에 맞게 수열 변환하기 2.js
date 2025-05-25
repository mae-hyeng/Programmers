function solution(arr) {
    let count = 1;
    let newArr = [];
    newArr.push(arr);
    while (true) {
        arr = arr.map(a => {
            if (a >= 50 && a % 2 === 0) return a / 2;
            else if (a < 50 && a % 2 === 1) return a * 2 + 1; 
            else return a;
        });
        newArr.push(arr);
        if (count > 0 && JSON.stringify(newArr[count]) === JSON.stringify(newArr[count - 1])) return count - 1;
        count++;
    }
}