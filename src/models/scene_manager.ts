export class SceneManager {
	private game: Phaser.Game;
	private currentScene: string | undefined;

	constructor(game: Phaser.Game) {
		this.game = game;
	}
	public addScene (sceneKey: string, scene: Phaser.Scene) {
		this.game.scene.add(sceneKey, scene);
	}

	public startScene(sceneKey: string): void {
		if (this.currentScene) this.game.scene.stop(this.currentScene);
		this.currentScene = sceneKey;
		this.game.scene.start(sceneKey);
	}
}