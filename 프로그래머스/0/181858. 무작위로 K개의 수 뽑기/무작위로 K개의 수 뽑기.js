function solution(arr, k) {
    let setArr = [...new Set(arr)];
    if (setArr.length > k) return setArr.slice(0, k);
    else {
        while (setArr.length !== k) {
            setArr.push(-1);
        }
        return setArr;
    }
}