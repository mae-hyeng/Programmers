function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((arr, cur) => arr += cur ) : num_list.reduce((arr, cur) => arr *= cur)
}