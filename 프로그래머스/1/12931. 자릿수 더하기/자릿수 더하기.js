function solution(n)
{
    return (n+"").split("").reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
}