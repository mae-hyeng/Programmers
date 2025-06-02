function solution(survey, choices) {
    let obj = {
        "RT" : {"R" : 0, "T" : 0 },
        "CF" : {"C" : 0, "F" : 0 },
        "JM" : {"J" : 0, "M" : 0 },
        "AN" : {"A" : 0, "N" : 0 }
    };
    
    survey.forEach((sur, idx) => {
        let c = choices[idx];
        if (c === 4) return;
        
        let flag = false;
        let key = sur;
        if (!obj[sur]) {
            key = key.split("").reverse().join("");
            flag = true;
        } 
        
        if (c < 4) {
            if (flag) obj[key][sur.split("")[0]] += Math.abs(c - 4);
            else obj[key][sur.split("")[0]] += Math.abs(c - 4);
        }
        else {
            if (flag) obj[key][sur.split("")[1]] += Math.abs(c - 4);
            else obj[key][sur.split("")[1]] += Math.abs(c - 4);
        }

    });
    
    return Object.entries(obj).map(([_, c]) => {
        const o = Object.keys(c);
        const a = o[0];
        const b = o[1];

        if (c[a] > c[b]) return a;
        if (c[a] < c[b]) return b;
        return a < b ? a : b;
    }).join("");
}