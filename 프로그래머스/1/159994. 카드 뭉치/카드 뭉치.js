function solution(cards1, cards2, goal) {
    var answer = [];
    goal.map((i, idx) => {
        return cards1[0] === i
            ? answer.push(cards1.splice(0, 1))
            : cards2[0] === i
                ? answer.push(cards2.splice(0, 1))
                : answer;
    })
    return goal.length === answer.length ? "Yes" : "No";
}