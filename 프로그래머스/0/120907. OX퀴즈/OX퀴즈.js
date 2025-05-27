function solution(quiz) {
    return quiz.map(qu => {
        const [x, oper, y, eq, z] = qu.split(" ");
        if (oper === "+") {
            return +x + +y === +z ? "O" : "X";
        } else {
            return +x - +y === +z ? "O" : "X";
        }
    });
}