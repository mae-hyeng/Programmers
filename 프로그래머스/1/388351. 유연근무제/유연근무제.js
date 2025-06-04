function solution(schedules, timelogs, startday) {
    
    const timeOper = (time) => {
        time = Math.floor(time / 100) * 60 + (time % 100) + 10;
        return Math.floor(time / 60) * 100 + (time % 60);
    }
    
    const week = 7;
    const [m, n] = [
        Math.max(week - startday - 1, week - startday),
        Math.min(week - startday - 1, week - startday),
    ];
    timelogs.forEach(t => {
        t.splice(m, 1);
        t.splice(n, 1);
    });
    
    return timelogs.map((time, tidx) => time.every(t => t <= timeOper(schedules[tidx]))).filter(Boolean).length;
}