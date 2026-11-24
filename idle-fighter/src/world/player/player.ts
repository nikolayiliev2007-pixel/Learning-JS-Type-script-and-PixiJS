import {Graphics} from "pixi.js";


export const player = new Graphics();
player.rect(0, 0, 32, 32);
player.fill(0x3498db);



const playerSpeedVector = 150;

export function updatePlayerPosition(dt: number,keyState: Record<string, boolean>) {
    let moveX = 0;
    let moveY = 0;
    if (keyState.rightKey) moveX += 1;
    if (keyState.leftKey) moveX -= 1;
    if (keyState.downKey) moveY += 1;
    if (keyState.upKey) moveY -= 1;
    
    const length = Math.hypot(moveX, moveY);
    if (length > 0) 
    {
        moveX /= length;
        moveY /= length;
    }
    player.x += moveX * playerSpeedVector * dt;
    player.y += moveY * playerSpeedVector * dt;

    moveX = 0;
    moveY = 0;
}
