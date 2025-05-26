function solution(id_pw, db) {
    let flag = 0;
    db.forEach(d => {
        if (d[0] === id_pw[0]) {
            flag++;
            if (d[1] === id_pw[1]) flag++;
        }
    });
    return flag === 2 ? "login" : flag === 1 ? "wrong pw" : "fail";
}