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

let playerSpeedVector = 150;

type DirectionKey = "rightKey" | "leftKey" | "upKey" | "downKey";

const keyState: Record<DirectionKey, boolean> = {
    rightKey: false,
    leftKey: false,
    upKey: false,
    downKey: false
};

const arrowKeyMap: Record<string, DirectionKey> = {
    ArrowRight: "rightKey",
    ArrowLeft: "leftKey",
    ArrowUp: "upKey",
    ArrowDown: "downKey"
};

window.addEventListener("keydown", (event) => {
    const directionKey = arrowKeyMap[event.key];
    if (directionKey) {
        keyState[directionKey] = true;
    }
});

window.addEventListener("keyup", (event) => {
    const directionKey = arrowKeyMap[event.key];
    if (directionKey) {
        keyState[directionKey] = false;
    }
});

app.ticker.add((ticker) => {
    const dt = ticker.deltaMS / 1000;
    if (keyState.rightKey) {
        player.x += playerSpeedVector * dt;
    }
    if (keyState.leftKey) {
        player.x -= playerSpeedVector * dt;
    }
    if (keyState.downKey) {
        player.y += playerSpeedVector * dt;
    }
    if (keyState.upKey) {
        player.y -= playerSpeedVector * dt;
    }
});