function solution(numbers) {
    numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        return Number(b + a) - Number(a + b);
    });
                 
    return numbers.reduce((a, c) => a += c) === 0 ? "0" : numbers.join("");
}