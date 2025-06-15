function solution(n,a,b)
{
    let count = 1;
    
    while (true) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        if (a === b) break;
        count++;
    }
    
    return count;
}