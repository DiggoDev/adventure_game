import { GameScene } from '../../game/views/scenes/game_scene';
import { Assets } from '../../models/assets';
import { SceneManager } from '../../models/scene_manager';
import { MenuScene } from '../views/scenes/menu_scene';


export class MenuController {
	private menuScene: MenuScene;
	private sceneManager: SceneManager;

	constructor(sceneManager: SceneManager, assets: Assets) {
		this.menuScene = new MenuScene(assets);
		this.sceneManager = sceneManager;
		sceneManager.addScene(MenuScene.sceneKey, this.menuScene);
	}
	public start(): void {
		this.sceneManager.startScene(MenuScene.sceneKey);
		this.menuScene.sceneEvents.on('create', () => {
			this.menuScene.getStartButton().on('pointerdown', () => {
				console.log('Start button clicked');
				this.sceneManager.startScene(GameScene.sceneKey);
			});
		});
	}
}