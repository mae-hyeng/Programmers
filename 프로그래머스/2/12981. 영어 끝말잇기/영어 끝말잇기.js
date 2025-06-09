function solution(n, words) {
    
    const firstWord = (word) => {
        return word[0];
    }
    
    const lastWord = (word) => {
        const lastIndex = word.length - 1;
        return word[lastIndex];
    }
    
    const dist = new Set();
    dist.add(words[0]);
    let prevWord = lastWord(words[0]);
    
    for (let i = 1; i < words.length; i++) {
        if (prevWord !== firstWord(words[i])) return [Math.floor(i % n) + 1, Math.floor(i / n) + 1];
        else if (dist.has(words[i])) return [Math.floor(i % n) + 1, Math.floor(i / n) + 1];
        else {
            dist.add(words[i]);
            prevWord = lastWord(words[i]);
        }
    }
    
    return [0,0];
}