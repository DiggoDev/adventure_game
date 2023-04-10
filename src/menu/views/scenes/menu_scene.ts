import { Assets } from '../../../models/assets';

export class MenuScene extends Phaser.Scene {
	public static readonly sceneKey = 'MenuScene';
	public sceneEvents: Phaser.Events.EventEmitter;
	private assets: Assets;

	private startButton: Phaser.GameObjects.Text | undefined;
	constructor(assets: Assets) {
		super({ key: MenuScene.sceneKey });
		this.sceneEvents = new Phaser.Events.EventEmitter();
		this.assets = assets;
	}
	public preload (): void {
		// Load the game assets
		this.load.image(this.assets.assetsKeys.menuBackground, this.assets.values.menuBackground);

		this.sceneEvents.emit('preload');
	}
	public create (): void {
		this.add.image(0, 0, this.assets.assetsKeys.menuBackground).setOrigin(0, 0);
		this.createMenuButtons();

		this.sceneEvents.emit('create');
	}
	public getStartButton (): Phaser.GameObjects.Text {
		if(!this.startButton) throw new Error('Start button is not defined');
		return this.startButton;
	}
	private createMenuButtons (): void {
		this.startButton = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, 'Start game');
		this.startButton.setInteractive();
	}
}