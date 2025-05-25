function solution(emergency) {
    const obj = {};
    const emer = [...emergency];
    emer.sort((a, b) => b - a).forEach((e, i) => {
        obj[e] = i + 1;
    })
    return emergency.map(e => e = obj[e]);
}