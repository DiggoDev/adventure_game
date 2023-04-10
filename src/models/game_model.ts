import { GameView } from "../views/game_view";

export class GameModel {
	private view: GameView;
	private score: number;

	constructor(view: GameView) {
		this.view = view;
		this.score = 0;
	}

	public startGame (): void {
		// Reset the score and start the game
		this.score = 0;
		this.view.startGame();
	}
}