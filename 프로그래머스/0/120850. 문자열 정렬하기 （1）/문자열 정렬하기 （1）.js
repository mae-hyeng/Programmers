function solution(my_string) {
    return [...my_string.replace(/[^0-9]/g, '')].map(ms => Number(ms)).sort((a, b) => a - b);
}