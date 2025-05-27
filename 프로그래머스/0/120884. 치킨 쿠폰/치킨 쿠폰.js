function solution(chicken) {
    let coupon = chicken;
    let order = 0;
    while (coupon >= 10)  {
        order += Math.floor(coupon / 10);
        coupon = Math.floor((coupon / 10) + (coupon % 10))
    }
    return order;
}