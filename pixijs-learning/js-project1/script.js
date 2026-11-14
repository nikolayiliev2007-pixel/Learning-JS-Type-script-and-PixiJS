let health = 100;
let score = 0;

function takeDamage(amount = 20) {
    health -= amount;
    score += amount;
    if (health < 0) {
        console.log("Game Over");
    }
}
takeDamage(30);