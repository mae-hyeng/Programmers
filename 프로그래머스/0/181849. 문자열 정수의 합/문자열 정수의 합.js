function solution(num_str) {
    return [...num_str].map(n => Number(n)).reduce((acc, cur) => acc += cur, 0);
}