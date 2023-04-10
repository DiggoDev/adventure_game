import { Assets } from '../../models/assets';
import { SceneManager } from '../../models/scene_manager';
import { GameScene } from '../views/scenes/game_scene';

export class GameController {
	private gameScene: GameScene;
	private sceneManager: SceneManager;
	
	constructor(sceneManager: SceneManager, assets: Assets) {
		this.gameScene = new GameScene(assets);
		this.sceneManager = sceneManager;
		sceneManager.addScene(GameScene.sceneKey, this.gameScene);
	}
}