function solution(answers) {
    const dropOut =[
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let list = [];
    dropOut.forEach((d, di) => {
        list[di] = answers.filter((a, ai) => a === d[ai % d.length]).length;
    })
    
    let max = Math.max(...list);
    return list.reduce((acc, cur, idx) => {
        if (cur === max) acc.push(idx + 1);
        return acc;
    }, [])
}