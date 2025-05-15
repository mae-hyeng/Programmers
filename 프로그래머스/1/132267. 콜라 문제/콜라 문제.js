function solution(a, b, n) {
    let result = 0;

    while (n >= a) {
        const getCol = Math.floor(n / a) * b;
        result += getCol;
        n = Math.floor(n / a) * b + (n % a);
    }

    return result;
}