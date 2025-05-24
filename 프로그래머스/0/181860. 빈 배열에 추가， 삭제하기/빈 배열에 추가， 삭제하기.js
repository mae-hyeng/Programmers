function solution(arr, flag) {
    let newArr = [];
    arr.forEach((a, idx) => {
        flag[idx] ? newArr.push(...Array(a * 2).fill(a)) : newArr.splice(-a);
    });
    return newArr;   
}