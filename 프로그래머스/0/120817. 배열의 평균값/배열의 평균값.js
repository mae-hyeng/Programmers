function solution(numbers) {
    return numbers.reduce((acc, cur) => {
        return acc = acc + cur;
    }, 0) / numbers.length;
}