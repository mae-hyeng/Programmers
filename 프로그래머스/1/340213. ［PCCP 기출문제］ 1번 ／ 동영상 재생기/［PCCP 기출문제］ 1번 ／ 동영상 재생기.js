function solution(video_len, pos, op_start, op_end, commands) {
    const timeToNum = (time) => {
        const [hour, min] = time.split(":").map(Number);
        return hour * 60 + min;
    };

    const timeToStr = (time) => {
        const hour = Math.floor(time / 60);
        const min = time % 60;
        return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
    };

    video_len = timeToNum(video_len);
    pos = timeToNum(pos);
    op_start = timeToNum(op_start);
    op_end = timeToNum(op_end);

    commands.forEach((comm) => {
        if (pos >= op_start && pos <= op_end) pos = op_end;

        if (comm === "next") {
            pos += 10;
            if (pos > video_len) pos = video_len;
            if (pos >= op_start && pos <= op_end) pos = op_end;
        } else if (comm === "prev") {
            pos -= 10;
            if (pos < 0) pos = 0;
            if (pos >= op_start && pos <= op_end) pos = op_end;
        }
    });

    return timeToStr(pos);
}