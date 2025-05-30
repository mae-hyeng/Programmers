function solution(players, callings) {
    const name = new Map();
    players.forEach((p, idx) => name.set(p, idx));
    
    callings.forEach((c, idx) => {
        let i = name.get(c);
        [players[i - 1], players[i]] = [players[i], players[i - 1]];
        
        name.set(c, i - 1);
        name.set(players[i], i);
    });
    return players;
}