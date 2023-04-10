import { GameScene } from '../../game/views/scenes/game_scene';
import { Assets } from '../../models/assets';
import { SceneManager } from '../../models/scene_manager';
import { CreatePlayerScene } from '../views/scenes/create_player_scene';
import { MenuScene } from '../views/scenes/menu_scene';


export class MenuController {
	private menuScene: MenuScene;
	private createPlayerScene: CreatePlayerScene;
	private sceneManager: SceneManager;

	constructor(sceneManager: SceneManager, assets: Assets) {
		this.menuScene = new MenuScene(assets);
		this.createPlayerScene = new CreatePlayerScene(assets);
		this.sceneManager = sceneManager;
		sceneManager.addScene(MenuScene.sceneKey, this.menuScene);
		sceneManager.addScene(CreatePlayerScene.sceneKey, this.createPlayerScene);
	}
	public start(): void {
		this.sceneManager.startScene(MenuScene.sceneKey);
		this.menuScene.sceneEvents.on('create', () => {
			this.menuScene.getStartButton().on('pointerdown', () => {
				console.log('Start button clicked');
				this.sceneManager.startScene(GameScene.sceneKey);
			});
			this.menuScene.getNewGameButton().on('pointerdown', () => {
				console.log('newGameButton clicked');
				this.sceneManager.startScene(CreatePlayerScene.sceneKey);
			});
		});
	}
	public openCreatePlayerScene(): void {
		this.sceneManager.startScene(CreatePlayerScene.sceneKey);
		const userInputField = this.createPlayerScene.getUsernameInputField();
		userInputField.on('click', (event: Event) => {
			event.preventDefault();
		});
		userInputField.on('input', (event: KeyboardEvent) => {
			console.log('Input event triggered');
			console.log(event);
		});
			
	}
}