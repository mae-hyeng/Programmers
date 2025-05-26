function solution(balls, share) {
    function fact (n) {
        return Array(n).fill(0).reduce((acc, cur, idx) => {
            return acc *= idx + 1;
        }, 1);
    }
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)))
}

// 서로 다른 n개 중 m개를 뽑는 경우의 수 공식
// n! / ((n - m)! * m!)