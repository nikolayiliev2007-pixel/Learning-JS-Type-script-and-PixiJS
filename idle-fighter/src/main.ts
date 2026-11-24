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

//Movement
const playerSpeed = 150;
let playerSpeedVector = playerSpeed;

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
    ArrowDown: "downKey",
    KeyD: "rightKey",
    KeyA: "leftKey",
    KeyW: "upKey",
    KeyS: "downKey"
};

window.addEventListener("keydown", (event) => {
    const directionKey = arrowKeyMap[event.code];
    if (directionKey) {
        keyState[directionKey] = true;
    }
});

window.addEventListener("keyup", (event) => {
    const directionKey = arrowKeyMap[event.code];
    if (directionKey) {
        keyState[directionKey] = false;
    }
});

app.ticker.add((ticker) => {
    const dt = ticker.deltaMS / 1000;
    let moveX = 0;
    let moveY = 0;
    if (keyState.rightKey) {
        // player.x += playerSpeedVector * dt;
        moveX += 1;
    }
    if (keyState.leftKey) {
       // player.x -= playerSpeedVector * dt;
        moveX -= 1;
    }
    if (keyState.downKey) {
        //player.y += playerSpeedVector * dt;
        moveY += 1;
    }
    if (keyState.upKey) {
        //player.y -= playerSpeedVector * dt;
        moveY -= 1;
    }
    
    if (moveX !== 0 && moveY !== 0) 
    {
        playerSpeedVector /= Math.sqrt(2);
    }
    player.x += moveX * playerSpeedVector * dt;
    player.y += moveY * playerSpeedVector * dt;

    moveX = 0;
    moveY = 0;
    playerSpeedVector = playerSpeed;
});