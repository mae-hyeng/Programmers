function solution(arr) {
    const newArr = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    return newArr.length ? newArr : [-1];
}