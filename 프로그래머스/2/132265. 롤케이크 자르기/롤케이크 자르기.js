function solution(topping) {
    const total = topping.length;
    let count = 0;

    const cheul = new Set();
    const bro = new Map();
    
    for (let i of topping) {
        bro.set(i, (bro.get(i) || 0) + 1);
    }
    
    for (let i = 0; i < total; i++) {
        const t = topping[i];

        cheul.add(t);
        bro.set(t, bro.get(t) - 1);
        if (bro.get(t) === 0) bro.delete(t);

        if (cheul.size === bro.size) count++;
    }
    
    return count;
}