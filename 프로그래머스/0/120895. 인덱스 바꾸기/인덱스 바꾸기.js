function solution(my_string, num1, num2) {
    const ms = [...my_string];
    [ms[num1], ms[num2]] = [ms[num2], ms[num1]];
    return ms.join("");
}