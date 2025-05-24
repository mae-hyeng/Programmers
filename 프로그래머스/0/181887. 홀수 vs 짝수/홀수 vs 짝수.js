function solution(num_list) {
    let s1 = 0;
    let s2 = 0;
    num_list.reduce((a, c, idx) => idx % 2 === 0 ? s1 += c : s2 += c, 0);
    return s1 > s2 ? s1 : s2;
}