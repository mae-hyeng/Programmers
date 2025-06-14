function solution(friends, gifts) {
    let get = {};
    let set = {};
    gifts.forEach(gift => {
        const [g, s] = gift.split(" ");
        set[g] = (set[g] || 0) + 1;
        get[s] = (get[s] || 0) + 1;
    });

    let giftScore = {};
    friends.forEach(friend => {
        giftScore[friend] = (set[friend] || 0) - (get[friend] || 0);
    });

    let give = {};
    friends.forEach(a => {
        give[a] = {};
        friends.forEach(b => {
            if (a !== b) {
                give[a][b] = 0;
            }
        });
    });

    gifts.forEach(gift => {
        const [g, s] = gift.split(" ");
        give[g][s] += 1;
    });

    let result = {};
    friends.forEach(name => result[name] = 0);

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const a = friends[i];
            const b = friends[j];

            const aToB = give[a][b];
            const bToA = give[b][a];

            if (aToB > bToA) {
                result[a] += 1;
            } else if (aToB < bToA) {
                result[b] += 1;
            } else {
                if (giftScore[a] > giftScore[b]) {
                    result[a] += 1;
                } else if (giftScore[a] < giftScore[b]) {
                    result[b] += 1;
                }
            }
        }
    }

    return Math.max(...Object.values(result));
}