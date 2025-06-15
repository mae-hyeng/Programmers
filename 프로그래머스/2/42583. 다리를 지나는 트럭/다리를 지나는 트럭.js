function solution(bridge_length, weight, truck_weights) {
    let go = Array(bridge_length).fill(0);
    let time = 0;
    let total = 0;
    
    while (truck_weights.length > 0 || total > 0) {
        time++;
        total -= go.shift();
        
        if (truck_weights.length > 0 && total + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            go.push(truck);
            total += truck;
        } else go.push(0);
    }
    return time;
}