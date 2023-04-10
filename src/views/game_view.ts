import Phaser from "phaser";

export class GameView {
	private scene: Phaser.Scene;
	private game: Phaser.Game;

	constructor(game: Phaser.Game, scene : Phaser.Scene) {
		this.game = game;
		this.scene = scene;
	}

	public getScene (): Phaser.Scene {
		return this.scene;
	}
	public startGame (): void {
		this.game.scene.start('GameScene');
	}
}