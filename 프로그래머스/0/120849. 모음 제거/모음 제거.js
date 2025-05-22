function solution(my_string) {
    const m = ["a", "e", "i", "o", "u"];
    m.forEach(i => {
        my_string = my_string.includes(i) ? my_string.replaceAll(i, '') : my_string;
    })
    return my_string;
}