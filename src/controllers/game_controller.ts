import { ViewType } from '../models/view_types';
import { GameView } from '../views/game_view';
import { TextbasedGameScene } from '../views/scenes/textbased_game_scene';

export class GameController {
	private readonly gameViewKey = 'GameScene';
	private game: Phaser.Game;
	private view: GameView;

	constructor(game: Phaser.Game, viewType: ViewType) {
		this.game = game;
		let scene: Phaser.Scene;
		switch(viewType) {
			case 'textBased': {
				scene = new TextbasedGameScene();
				break;
			}
			default: {
				throw new Error('Invalid view type');
			}
		}
		this.view = new GameView(game, scene);
		this.game.scene.add(this.gameViewKey, this.view.getScene());
	}
}