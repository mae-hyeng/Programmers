function solution(id_list, report, k) {
    const sorted = [...new Set(report)].map(s => s.split(" "));
    let obj = {};
    
    id_list.forEach(id => {
        let c = sorted.map(s => s[1]).filter(s => id === s).length
        obj[id] = c;
    });
    
    // 정지된 id
    const suspended = Object.keys(obj).filter(key => obj[key] >= k);
    let suspenObj = {};
    
    sorted.forEach(sort => {
        const [id, rep] = sort;
        if (suspended.includes(rep)) {
            suspenObj[id] = (suspenObj[id] || 0) + 1;
        }
    })
    
    return id_list.map(id => suspenObj[id] || 0);
}