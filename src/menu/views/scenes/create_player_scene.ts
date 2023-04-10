import { Assets } from '../../../models/assets';

export class CreatePlayerScene extends Phaser.Scene {
	public static readonly sceneKey = 'CreatePlayerScene';
	public sceneEvents: Phaser.Events.EventEmitter;
	public inputEvents: Phaser.Events.EventEmitter;
	private assets: Assets;
	private inputField: Phaser.GameObjects.DOMElement | undefined;

	private startButton: Phaser.GameObjects.Text | undefined;
	constructor(assets: Assets) {
		super({ key: CreatePlayerScene.sceneKey });
		this.sceneEvents = new Phaser.Events.EventEmitter();
		this.inputEvents = new Phaser.Events.EventEmitter();
		this.assets = assets;
	}
	public preload (): void {
		// Load the game assets
		this.load.image(this.assets.assetsKeys.menuBackground, this.assets.values.menuBackground);

		this.sceneEvents.emit('preload');
	}
	public create (): void {
		this.add.image(0, 0, this.assets.assetsKeys.menuBackground).setOrigin(0, 0);
		const title = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2 - 100, 'Create player',  {
			fontSize: '48px',
			fontFamily: 'Arial',
			color: '#ffffff',
		});
		// create the input field
		this.inputField = this.add.dom(
			Number(this.game.config.width) / 2,
			Number(this.game.config.height) / 2,
			'input',
			'border: 2px solid #000; width: 250px; height: 50px; font-size: 24px; text-align: center;'
		) as Phaser.GameObjects.DOMElement;
		// this.inputField.node.placeholder = 'Enter text...';

		this.sceneEvents.emit('create');
	}
	public getUsernameInputField (): Phaser.GameObjects.DOMElement {
		if(!this.inputField) throw new Error('Input field is not defined');
		return this.inputField;
	}
}