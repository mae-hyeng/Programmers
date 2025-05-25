function solution(before, after) {
    function sorted (value) {
        return value.split("").sort((a, b) => a.localeCompare(b)).join("");
    }
    return sorted(before) === sorted(after) ? 1 : 0;
}