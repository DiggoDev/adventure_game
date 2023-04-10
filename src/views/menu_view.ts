import Phaser from "phaser";
import { MenuScene } from './scenes/textbased/menu_scene';

export class MenuView {
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