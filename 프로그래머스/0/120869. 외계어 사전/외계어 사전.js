function solution(spell, dic) {
    return dic.map(d => [...d].sort().join("")).filter(d => d === spell.sort().join("")).length ? 1 : 2;
}