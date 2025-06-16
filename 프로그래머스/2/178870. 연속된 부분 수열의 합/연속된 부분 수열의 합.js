function solution(sequence, k) {
    let s = 0;
    let e = 0;
    let sum = sequence[0];
    let sums = [];
    
    while (e < sequence.length) {
        if (sum < k) sum += sequence[++e];
        else if (sum > k) sum -= sequence[s++];
        else {
            sums.push([s,e]);
            sum += sequence[++e];
            sum -= sequence[s++];
        }
    }

    return sums.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}