import {Application, Graphics} from 'pixi.js';
const app = new Application();
await app.init({ background: '#1099bb', resizeTo: window });
document.body.appendChild(app.canvas);

const square = new Graphics().rect(0, 0, 100, 100).fill(0xff0000);
square.position.set(50, 50);
app.stage.addChild(square);


let health = 100;
let score = 0;

function takeDamage(amount) {
    health -= amount;
    score += amount;
    if (health < 0) {
        console.log("Game Over");
    }
    console.log(`Health: ${health}, Score: ${score}`);
}
takeDamage(30);