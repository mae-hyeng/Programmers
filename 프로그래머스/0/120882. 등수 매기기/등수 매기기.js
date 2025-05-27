function solution(score) {
    let obj = {};
    
    score = score.map(s => s.reduce((acc, cur) => acc += cur), 0);
    let filtered = [...score].sort((a, b) => b - a);
    let set = [...new Set(filtered)];
    set.forEach((i, idx) => obj[i] = idx + 1);
    
    let prev = -1;
    let count = 0;
    let rank = filtered.map((s) => {
                    if (prev === s) {
                      count++;
                      return (s = obj[s]);
                    } else {
                      prev = s;
                      obj[s] += count;
                    }
                    return (s = obj[s]);
                  });
    
    filtered.forEach((i, idx) => obj[i] = rank[idx]);
    return score.map(i => obj[i]);
}