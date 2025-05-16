function solution(name, yearning, photo) {
    let list = {};
    name.forEach((i, idx) => (list[i] = yearning[idx]));

    return photo.map((i) =>
        i.reduce((cur, arr) => {
            return cur + (list[arr] ?? 0);
        }, 0)
    );
}