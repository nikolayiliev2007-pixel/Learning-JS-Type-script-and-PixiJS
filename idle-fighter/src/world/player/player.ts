import {Graphics} from "pixi.js";


export const player = new Graphics();
player.rect(0, 0, 32, 32);
player.fill(0x3498db);

let moveX = 0;
let moveY = 0;

const playerSpeed = 150;
let playerSpeedVector = playerSpeed;

export function updatePlayerPosition(dt: number,keyState: Record<string, boolean>) {
    if (keyState.rightKey) {
        moveX += 1;
    }
    if (keyState.leftKey) {
        moveX -= 1;
    }
    if (keyState.downKey) {
        moveY += 1;
    }
    if (keyState.upKey) {
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
}
