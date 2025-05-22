function solution(keymap, targets) {
    let result = [];
    
    function minValue (value) {
        const mv = value.filter(v => v > -1);

        if (mv.length > 0) {
            return Math.min(...mv) + 1;
        } else {
            return -1;
        }
    }

  targets.forEach((t) => {
    let totalPresses = 0;
    let isPossible = true;

    t.split("").forEach((tt) => {
      let indexs = [];

      keymap.forEach((k) => {
        const pos = k.indexOf(tt);
        if (pos !== -1) {
          indexs.push(pos);
        }
      });

      const minPress = minValue(indexs);
      if (minPress === -1) {
        isPossible = false;
      }
      
      if (minPress !== -1) {
        totalPresses += minPress;
      }
    });

    if (isPossible) {
      result.push(totalPresses);
    } else {
      result.push(-1);
    }
  });
    return result;
}