function solution(elements) {
    let result = new Set();
    // elements.sort((a, b) => a - b);
    const newEle = elements.concat(elements);
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = i; j < i + elements.length; j++) {
            sum += newEle[j];
            result.add(sum);
        }
    }
    return result.size;
}