import Phaser from "phaser";

export class TextBasedMenuView {
	private scene: Phaser.Scene;
	private game: Phaser.Game;
	playButton: any;

	constructor(game: Phaser.Game, scene : Phaser.Scene) {
		this.game = game;
		this.scene = scene;
	}

	public getScene (): Phaser.Scene {
		return this.scene;
	}
}