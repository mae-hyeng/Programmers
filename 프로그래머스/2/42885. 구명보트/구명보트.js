function solution(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let sidx = 0;
    let lidx = people.length - 1;

    while (sidx <= lidx) {
        if (people[sidx] + people[lidx] <= limit) {
            sidx++;
        }
        lidx--;
        count++;
    }
    return count;
}