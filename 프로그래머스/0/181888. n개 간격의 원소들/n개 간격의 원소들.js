function solution(num_list, n) {
    return num_list.filter((nl, idx) => (idx) % n === 0);
}