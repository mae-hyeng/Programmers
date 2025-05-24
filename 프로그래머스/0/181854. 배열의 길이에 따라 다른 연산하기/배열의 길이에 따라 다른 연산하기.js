function solution(arr, n) {
    const al_flag = arr.length % 2 === 0;
    return arr.map((a, idx) => al_flag ? (idx % 2 === 1 ? a + n : a) : (idx % 2 === 0 ? a + n : a));
}