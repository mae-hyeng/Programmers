function solution(s) {
    const st = [];
    for (let c of s) {
        if (c === "(") st.push(c);
        else {
            if (!st.length) return false;
            st.pop();
        }
    }
    return st.length === 0;
}