function solution(keymap, targets) {
    let result = [];
    
    function minValue (value) {
        const mv = value.filter(v => v > -1);

        if (mv.length > 0) {
            return Math.min(...mv) + 1;
        } else {
            return -1;
        }
    }

    targets.forEach(t => {
        let s = 0;
        let flag = true;
        t.split("").forEach(tt => {
            let indexs = [];

            keymap.forEach(k => {
                const pos = k.indexOf(tt);
                if (pos !== -1) {
                    indexs.push(pos);
                }
            });
            
            const min = minValue(indexs);
            if (min === -1) flag = false;
            else s += min;
        })
        flag ? result.push(s) : result.push(-1);
    })
    return result;
}