function solution(genres, plays) {
    let result = [];
    let gp = genres.map((g, i) => [g, plays[i]]);
    
    let sum = {};
    genres.forEach((g, i) => {
        sum[g] = (sum[g] || 0) + plays[i];
    });
    
    let seq = Object.entries(sum).sort((a, b) => b[1] - a[1]).map(s => s[0]);
    
    seq.forEach(genre => {
        let genrePlays = genres.map((g, i) => g === genre ? {index: i, play: plays[i]} : null).filter(Boolean);
        
        genrePlays.sort((a, b) => b.play - a.play || a.index - b.index);
        
        result.push(genrePlays[0].index);
        if (genrePlays.length > 1) {
            result.push(genrePlays[1].index);
        }
    });
    
    return result;
}