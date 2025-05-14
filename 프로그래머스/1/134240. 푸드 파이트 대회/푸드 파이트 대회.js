function solution(food) {
    let result = "";
    food.forEach((i, idx) => {
        result += String(idx).repeat(Math.floor(i / 2));
    })
    return `${result}0${[...result].reverse().join("")}`;
}