function solution(before, after) {
    function sorted (value) {
        return value.split("").sort().join("");
    }
    return sorted(before) === sorted(after) ? 1 : 0;
}