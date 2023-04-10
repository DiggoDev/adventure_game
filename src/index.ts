import "phaser";

// import { GameController } from "./controllers/gameController";
// import { GameModel } from "./models/gameModel";
// import { GameView } from "./views/gameView";
import { config } from "./config";

import { MainController } from './controllers/main_controller';
import { viewTypes } from './models/view_types';

class Game extends Phaser.Game {
  constructor() {
    super(config);

    // const model = new GameModel();
    // const view = new GameView(this);
    // const controller = new GameController(model, view);
    // controller.start();
  }
}


window.addEventListener("load", () => {
	const game = new Game();

	const controller = new MainController(game, viewTypes.textBased);
	
	controller.start();
});