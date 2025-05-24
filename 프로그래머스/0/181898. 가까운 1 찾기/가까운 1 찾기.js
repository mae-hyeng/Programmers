function solution(arr, idx) {
    const arridx = arr.slice(idx).indexOf(1);
    return arridx > -1 ? arridx + idx : arridx;
}