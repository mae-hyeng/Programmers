function solution(str_list) {
    const li = str_list.indexOf("l");
    const ri = str_list.indexOf("r");
    let flag = true;
    if (li === -1 && ri === -1) return [];
    if (li === -1) return str_list.slice(ri + 1);
    if (ri === -1) return str_list.slice(0, li);
    if (li > -1 && ri > -1) {
        flag = li < ri ? true : false;
    }
    
    return flag ? str_list.slice(0, li) : str_list.slice(ri + 1);
}