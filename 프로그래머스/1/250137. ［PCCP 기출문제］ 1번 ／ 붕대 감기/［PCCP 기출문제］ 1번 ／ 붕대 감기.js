function solution(bandage, health, attacks) {
    const maxHp = health;
    let [casting, healing, AddHealing] = bandage;
    let success = 0;
    let attackObj = {};
    
    attacks.forEach(att => {
        const [time, damage] = att;
        attackObj[time] = damage;
    });
    let lastAttack = Math.max(...attacks.map(att => att[0]));
    
    
    for (let i = 1; i <= lastAttack; i++) {
        if (attackObj[i]) {
            success = 0;
            health -= attackObj[i];
            if (health <= 0) return -1;
        } else {
            success++;
            health += healing;
            if (health > maxHp) health = maxHp; 
            if (success === casting) {
                health += AddHealing;
                if (health > maxHp) health = maxHp;
                success = 0;
            } 
        }
    }
    return health > 0 ? health : -1;
}