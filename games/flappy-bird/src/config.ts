import { BootScene } from "./scenes/boot-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: "Flappy Bird",
    url: "",
    version: '1.0',
    width: 390,
    height: 600,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [BootScene],
    input: {
        keyboard: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300}
        }
    },
    backgroundColor: '#FFFF00',
        render: { pixelArt: true, antialias: false}
}