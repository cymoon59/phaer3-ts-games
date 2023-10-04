import { Sleeping } from "matter";

export class BootScene extends Phaser.Scene {
    private loadingBar!: Phaser.GameObjects.Graphics;
    private progressBar!: Phaser.GameObjects.Graphics;

    constructor() {
        super({
            key: "BootScene"
        });
    }

    preload(): void {
        console.log("boot preload");
        this.cameras.main.setBackgroundColor(0xA9A9A9);
        this.createLoadingbar();

        this.load.on(
            'progress',
            function(value: number) {
                console.log("progress");
                this.progressBar.clear();
                this.progressBar.fillStyle(0xff0000, 1);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 2 - 16,
                    (this.cameras.main.height / 2) * value,
                    16
                );
            },
            this
        );
        
        this.load.on(
            'complete',
            function() {
                console.log("complete");
                this.progressBar.destroy();
                this.loadingBar.destroy();
            },
            this
        );
        
        this.load.pack('preload', './assets/pack.json', 'preload');
    }

    update(): void {
        console.log("boot-scene update");
        //this.scene.start('MainMenuScene');
    }

    private createLoadingbar(): void {
        console.log("creaeLoadingBar");
        this.loadingBar = this.add.graphics();
        this.loadingBar.fillStyle(0xFF00FF, 1);
        this.loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20   
        );
        this.progressBar = this.add.graphics();
    }
}