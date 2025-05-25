function solution(my_string, s, e) {
    let ms = [...my_string];
    ms.splice(s, e - s + 1, ...ms.slice(s, e + 1).reverse());
    return ms.join("");
}