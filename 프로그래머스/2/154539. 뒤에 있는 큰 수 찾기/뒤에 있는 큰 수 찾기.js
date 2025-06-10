function solution(numbers) {
    const result = new Array(numbers.length);
    const stack = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= numbers[i]) {
            stack.pop();
        }

        result[i] = stack.length ? stack[stack.length - 1] : -1;

        stack.push(numbers[i]);
    }

    return result;
}