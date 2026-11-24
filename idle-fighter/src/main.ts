import "./style.css";
import {Application} from "pixi.js";
import {container} from "./world/world";
import {player, updatePlayerPosition} from "./world/player/player";

// Create a new application
const app = new Application();
export {app};
await app.init({
    height: 540,
    width: 960,
    background: 0x183828
});
document.body.appendChild(app.canvas);

//Player
app.stage.addChild(player);

//Movement
type DirectionKey = "rightKey" | "leftKey" | "upKey" | "downKey";

export const keyState: Record<DirectionKey, boolean> = {
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
    updatePlayerPosition(dt, keyState);
});



app.stage.addChild(container);