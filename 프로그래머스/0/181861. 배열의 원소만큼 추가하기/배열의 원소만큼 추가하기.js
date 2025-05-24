function solution(arr) {
    let newArr = [];
    arr.forEach(a => {
        for (let i = 0; i < a; i++) {
            newArr.push(a);
        }
    });
    return newArr;
}