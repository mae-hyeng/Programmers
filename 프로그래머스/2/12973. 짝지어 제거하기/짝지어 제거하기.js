function solution(s)
{
    let st = [];

    for (let str of s) {
        if (st.length && st[st.length - 1] === str) {
            st.pop();
        } else {
            st.push(str);
        }
    }

    return st.length === 0 ? 1 : 0;
}