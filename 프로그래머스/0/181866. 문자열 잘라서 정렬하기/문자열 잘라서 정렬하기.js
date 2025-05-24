function solution(myString) {
    return myString.split("x").filter(ms => ms !== "").sort();
}