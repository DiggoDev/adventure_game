import { Game } from 'phaser';
import { GameController } from '../game/controllers/game_controller';
import { MenuController } from '../menu/controllers/menu_controller';
import { Assets } from '../models/assets';
import { SceneManager } from '../models/scene_manager';

export class MainController {
	private menuController: MenuController;
	private gameController: GameController;
	constructor() {
		const game = new Game();
		const sceneManager = new SceneManager(game);
		const assets = new Assets();

		// const controller = new MainController(game, viewTypes.textBased);
		// controller.start();
		this.menuController = new MenuController(sceneManager, assets);
		this.gameController = new GameController(sceneManager, assets);
	}
	public start(): void {
		this.menuController.start();
	}
}