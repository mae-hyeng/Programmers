function solution(nums) {
    
    function dec (d) {
        let sum = 0;
        for (let i = 1; i <= d; i++) {
            if (d % i === 0) sum++;
        }
        return sum <= 2;
    }
    
    let sum = 0;
    
    let sums = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sums.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    sums.forEach(i => dec(i) ? sum++ : sum)
    return sum;
}