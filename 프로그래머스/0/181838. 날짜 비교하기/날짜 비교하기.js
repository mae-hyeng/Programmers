function solution(date1, date2) {
    const d1 = date1.map((d, idx) => idx >= 1 ? String(d).padStart(2, 0) : d);
    const d2 = date2.map((d, idx) => idx >= 1 ? String(d).padStart(2, 0) : d);
    
    return d1 < d2 ? 1 : 0; 
}