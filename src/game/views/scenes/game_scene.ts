import { Assets } from '../../../models/assets';

export class GameScene extends Phaser.Scene {
	public static readonly sceneKey = 'GameScene';
	private assets: Assets;

	constructor(assets: Assets) {
		super({ key: GameScene.sceneKey });
		this.assets = assets;
	}
	public preload () {
		// Load the game assets
		this.load.image(this.assets.assetsKeys.gameBackground, this.assets.values.gameBackground);
	}
	public create() {
		this.add.image(0, 0, this.assets.assetsKeys.gameBackground).setOrigin(0, 0);
		this.add.text(0, 0, 'GameScene');
	}
}