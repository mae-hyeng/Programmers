function solution(num_list) {
    let count = 0;
    num_list.forEach(nl => {
        while (nl !== 1) {
            if (nl % 2 === 0) {
                nl = nl / 2;
                count++;
            } else {
                nl = (nl - 1) / 2;
                count++;
            }
        }
    })
    return count;
}