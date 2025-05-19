function solution(nums) {
    let get = nums.length / 2;
    let s = [...new Set(nums)];
    
    return s.length > get ? get : s.length;
}