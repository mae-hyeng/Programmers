function solution(order) {
    const ame = 4500;
    const cafe = 5000;
    return order.reduce((acc, cur) => {
        if (cur === "anything") return acc += ame;
        if (cur.includes("americano")) return acc += ame;
        else return acc += cafe;
    }, 0)
}