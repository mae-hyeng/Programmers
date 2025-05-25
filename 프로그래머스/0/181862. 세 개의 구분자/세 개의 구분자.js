function solution(myStr) {
    const arr = myStr.split(/[abc]/).filter(ms => ms);
    return arr.length ? arr : ["EMPTY"];
}