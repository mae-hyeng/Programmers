function solution(lottos, win_nums) {
    
    function rank(correct) {
        switch (correct) {
            case 0:
            case 1: return 6;
            case 2: return 5;
            case 3: return 4;
            case 4: return 3;
            case 5: return 2;
            case 6: return 1;
        }
    }
    
    let res = [];
    // 최대
    res.push(rank(lottos.filter(i => win_nums.includes(i)).length + lottos.filter(i => i === 0).length));
    // 최소
    res.push(rank(lottos.filter(i => win_nums.includes(i)).length));
    return res;
}