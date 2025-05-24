function solution(arr) {
    return arr.every((a, ai) => a.every((aa, aai) => arr[ai][aai] === arr[aai][ai])) ? 1 : 0;
}