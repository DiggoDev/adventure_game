import { ViewType } from '../models/view_types';
import { MenuView } from '../views/menu_view';
import { TextbasedMenuScene } from '../views/scenes/textbased_menu_scene';

export class MenuController {
	private readonly menuViewKey = 'MenuScene';
	private view: MenuView;
	private game: Phaser.Game;

	constructor(game: Phaser.Game, viewType: ViewType) {
		this.game = game;
		let scene: Phaser.Scene;
		switch(viewType) {
			case 'textBased': {
				scene = new TextbasedMenuScene();
				break;
			}
			default: {
				throw new Error('Invalid view type');
			}
		}


		/* `addScene(this.view.getScene());` is adding the scene of the menu view to the game configuration.
		This is necessary so that the scene can be rendered and displayed in the game. */
		this.view = new MenuView(game, scene);

		this.game.scene.add(this.menuViewKey, this.view.getScene());
	}
	public openMenu (): void {
		this.game.scene.start(this.menuViewKey);
	}
}