import Phaser from "phaser";
// import { GameModel } from "./models/game_model";
// import { GameView } from "./views/game_view";

export class TextbasedGameScene extends Phaser.Scene {
	//   private model: GameModel;
	//   private view: GameView;

	constructor() {
		super({ key: "GameScene" });
	}

	public create (): void {
		this.add.text(100, 100, "Hello GameScene");
		// Create the game model and view
		// this.model = new GameModel(this.view);
		// this.view = new GameView(this.game);

		// // Start the game
		// this.model.startGame();
	}

	public update (): void {
		// Update the game logic
	}
}