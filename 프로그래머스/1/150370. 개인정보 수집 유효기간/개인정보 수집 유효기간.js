function solution(today, terms, privacies) {
    const now = new Date(today);
    let termsObj = {};
    terms.forEach(t => {
        const [condition, ep] = t.split(" ");
        termsObj[condition] = ep;
    });
    
    return privacies.map((pri, idx) => {
        let [date, ep] = pri.split(" ");
        ep = Number(termsObj[ep]);
        
        let [year, month, day] = date.split(".").map(Number);
        const epDate = new Date(year, month - 1 + ep, day - 1);
        if (epDate.getDate > 28) epDate.setDate(28);
        
        return {idx : idx + 1, epDate}
    }).filter(pri => pri.epDate < now).map(pri => pri.idx);
    
    
}