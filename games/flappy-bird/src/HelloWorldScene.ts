import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	bird: any;
	preload() {
		this.load.image('bird', 'assets/images/bird.png')
		this.load.image('bg', 'assets/images/bg.png')
	}

	create() {
		this.add.image(195, 300, 'bg')
		this.bird = this.physics.add.image(195, 100, 'bird')

		this.bird.setVelocity(0, 200)
		//logo.setBounce(1, 1)
		this.bird.setCollideWorldBounds(true)
	}

	update() {
		const pointer = this.input.activePointer;
		if (pointer.isDown) {
			this.bird.setVelocity(0, -100)
		}

		console.log(`pointer down:${pointer.isDown}`)
	}
}
