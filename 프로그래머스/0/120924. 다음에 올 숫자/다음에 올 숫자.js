function solution(common) {
    const lastNum = common[common.length - 1];
    if (common[1] - common[0] === common[2] - common[1]) {
        return lastNum + (common[1] - common[0]);
    } else {
        return lastNum * (common[1] / common[0]);
    }
}