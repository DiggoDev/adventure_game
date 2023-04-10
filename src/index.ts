import 'phaser';

// import { GameController } from "./controllers/gameController";
// import { GameModel } from "./models/gameModel";
// import { GameView } from "./views/gameView";
import { config } from './config';
import { GameController } from './game/controllers/game_controller';
import { MenuController } from './menu/controllers/menu_controller';
import { Assets } from './models/assets';
import { SceneManager } from './models/scene_manager';

class Game extends Phaser.Game {
	constructor() {
		super(config);

		// const model = new GameModel();
		// const view = new GameView(this);
		// const controller = new GameController(model, view);
		// controller.start();
	}
}


window.addEventListener('load', () => {
	const game = new Game();
	const sceneManager = new SceneManager(game);
	const assets = new Assets();

	// const controller = new MainController(game, viewTypes.textBased);
	// controller.start();
	const menuController = new MenuController(sceneManager, assets);
	const gameController = new GameController(sceneManager, assets);
	menuController.start();
});