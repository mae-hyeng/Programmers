function solution(my_string, m, c) {
    let answer = "";
    for (let i = 0; i < my_string.length; i += m) {
        answer += my_string[i, i + c - 1]
    }

    return answer
}