function solution(order) {
    const orl = String(order).length;
    const norl = String(order).replace(/[369]/g, '').length;
    
    return orl - norl;
}