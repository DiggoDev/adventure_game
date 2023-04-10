import { ViewType } from '../models/view_types';

import { GameController } from './game_controller';
import { MenuController } from './menu_controller';

export class MainController {
	private gameController: GameController;
	private menuController: MenuController;

	constructor(game: Phaser.Game, viewType: ViewType) {

		this.menuController = new MenuController(game, viewType);
		this.gameController = new GameController(game, viewType);
	}
	public start(): void {
		this.menuController.openMenu();
	}
}