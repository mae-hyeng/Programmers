function solution(my_string, indices) {
    return [...my_string].filter((ms, idx) => !indices.includes(idx)).join("");
}