function solution(array, commands) {
    return commands.map((i, idx) => {
        return array.slice(i[0] - 1, i[1]).sort((a, b) => a - b)[i[2] - 1];
    })
}