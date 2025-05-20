function solution(n, arr1, arr2) {
    return arr1.map((i, idx) => {
        return (i | arr2[idx]).toString(2).padStart(n, 0).replaceAll('0', ' ').replaceAll('1', '#');
    })
}