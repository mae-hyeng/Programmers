function solution(my_string) {
    return Array(52).fill(0).map((a, idx) => {
        let num = 65;
        if (num + idx > 90) num += 6; 
        const charCode = String.fromCharCode(num + idx);
        return [...my_string].filter(f => f === charCode).length;
    });
}