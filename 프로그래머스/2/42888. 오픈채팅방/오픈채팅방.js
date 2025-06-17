function solution(record) {
    let result = [];
    let iN = {};
    let arr = record.filter(r => {
        return r.split(" ")[0] === "Enter" || r.split(" ")[0] === "Change"
    }).map(r => {
        let [id, name] = [r.split(" ")[1], r.split(" ")[2]]
        return [id, name]
    });
    
    arr.forEach(a => {
        let [id, name] = [a[0], a[1]];
        iN[id] = name;
    });
    
    record.forEach(r => {
        const [flag, id] = [r.split(" ")[0], r.split(" ")[1]];
        if (flag === "Enter") {
            result.push(`${iN[id]}님이 들어왔습니다.`);
        } else if (flag === "Leave") {
            result.push(`${iN[id]}님이 나갔습니다.`);
        }
    });
    
    return result;
}