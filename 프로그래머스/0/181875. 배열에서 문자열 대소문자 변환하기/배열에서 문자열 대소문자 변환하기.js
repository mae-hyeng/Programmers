function solution(strArr) {
    var answer = [];
    strArr.map((item, idx) => {
        idx % 2 === 0 ? answer.push(item.toLowerCase()) : answer.push(item.toUpperCase())
    })
    return answer;
}