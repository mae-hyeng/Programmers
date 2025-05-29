function solution(n) {
     let count = 1;
     let pos = "right";
     
     let right = 0;
     let down = 0;
     let left = n - 1;
     let up = n - 1;
     
     let result = Array(n).fill().map(a => Array(n).fill(0));
     
     while (count <= n**2) {
          if (pos === "right") {
               for (let i = right; i <= left; i++) {
                   result[down][i] = count++;
               }
               pos = "down";
          } else if (pos === "down") {
               for (let i = down + 1; i <= up; i++) {
                   result[i][left] = count++;
               }
               pos = "left";
          } else if (pos === "left") {
               for (let i = left - 1; i >= right; i--) {
                   result[up][i] = count++;
               }
               pos = "up";
          } else if (pos === "up") {
               for (let i = up - 1; i > down; i--) {
                   result[i][right] = count++;
               }

               right++;
               down++;
               left--;
               up--;
   
               pos = "right";
          }
     }
     return result;
 }