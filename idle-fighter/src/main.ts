import "./style.css";
import {Application, Graphics } from "pixi.js";

// Create a new application
const app = new Application();
await app.init({
    height: 540,
    width: 960,
    background: 0x183828
});
document.body.appendChild(app.canvas);

//Player
const player = new Graphics();
player.rect(0, 0, 32, 32);
player.fill(0x3498db);
app.stage.addChild(player);
player.position.set(app.screen.width / 2 - 16, app.screen.height / 2 - 16);

let playerSpeedVector = 5;
app.ticker.add(() => {
    player.x += playerSpeedVector;
    if (player.x +32 > app.screen.width || player.x < 0) {
        playerSpeedVector *= -1;
    }
});