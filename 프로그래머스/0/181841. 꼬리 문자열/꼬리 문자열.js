function solution(str_list, ex) {
    return str_list.filter(sl => !sl.includes(ex)).join("");
}