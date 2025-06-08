function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const dis = discount.slice(i, i + 10);
        let sum = 0;

        for (let j = 0; j < want.length; j++) {
            if (dis.filter((d) => d === want[j]).length === number[j]) sum++;
        }

        if (sum === want.length) count++;
    }
    return count;
}