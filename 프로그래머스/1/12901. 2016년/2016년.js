function solution(a, b) {
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(2016, a - 1, b);
    return dayOfWeek[date.getDay()];
}