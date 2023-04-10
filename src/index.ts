import 'phaser';

// import { GameController } from "./controllers/gameController";
// import { GameModel } from "./models/gameModel";
// import { GameView } from "./views/gameView";
import { MainController } from './controllers/main_controller';

window.addEventListener('load', () => {
	const mainController = new MainController();
	mainController.start();
});