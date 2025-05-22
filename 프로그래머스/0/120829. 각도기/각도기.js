function solution(angle) {
    if (0 < angle && angle <= 180) {
        if (angle === 90) return 2;
        if (angle === 180) return 4;
        if (angle < 90) {
            return 1;
        } else if (angle < 180) {
            return 3;
        }
    }
}