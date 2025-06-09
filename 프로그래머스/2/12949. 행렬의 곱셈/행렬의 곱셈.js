function solution(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let k = 0; k < arr2[0].length; k++) {
            let sum = 0;
            for (let j = 0; j < arr2.length; j++) {
                const num = arr2.map((arr) => arr.filter((_, idx) => idx === k));
                const mul = arr1[i][j] * num[j];
                sum += mul;
            }
            row.push(sum);
        }
        arr.push(row);
    }
    return arr;
}