function solution(citations) {
    let hidx = 0;;
    citations.forEach((_, idx) => {
        const thesis = citations[idx];
        const cited = citations.filter(c => c >= citations[idx]).length;
        const min = Math.min(thesis, cited);
        hidx = hidx > min ? hidx : min;
    });
    return hidx;
}