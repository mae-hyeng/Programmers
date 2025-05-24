function solution(binomial) {
    const [a, op, b] = binomial.split(" ").map((i, idx) => idx === 1 ? i : Number(i));
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else {
        return a * b;
    }
}