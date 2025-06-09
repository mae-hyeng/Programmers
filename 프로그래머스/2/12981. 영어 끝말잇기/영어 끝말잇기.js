function solution(n, words) {    
    const dist = new Set();
    dist.add(words[0]);
    let prevWord = words[0][words[0].length - 1];
    
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const firstCh = currentWord[0];
        const lastCh = currentWord[currentWord.length - 1];
        
        if (prevWord !== firstCh || dist.has(currentWord)) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        
        dist.add(currentWord);
        prevWord = lastCh;
    }
    
    return [0,0];
}