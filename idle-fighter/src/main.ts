import {Application} from "pixi.js";

const app = new Application();
await app.init({
    height: 540,
    width: 960,
    background: 0x183828
});

document.body.appendChild(app.canvas);