function solution(new_id) {
    // 1
    new_id = new_id.toLowerCase();
    
    // 2
    new_id = new_id.match(/[a-z0-9-_.]/g).join("");
    
    // 3
    new_id = new_id.replaceAll(/\.{2,}/g, ".");
    
    // 4
    new_id = new_id.replace(/^\.|\.$/g, "");
    
    // 5
    if (!new_id) new_id = "a";
    
    // 6
    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    while((/\.$/).test(new_id)) new_id = new_id.replace(/\.$/, "");
    
    // 7
    while (new_id.length < 3) {
        new_id += new_id.at(-1);
    }
    
    return new_id;
}