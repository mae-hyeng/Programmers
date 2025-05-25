function solution(array, n) {
    array.sort((a, b) => a - b);
    const newArr = array.map(a => Math.abs(a - n));
    const idx = newArr.indexOf(Math.min(...newArr));
    return array[idx];
}