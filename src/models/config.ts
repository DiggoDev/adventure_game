export const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'game',
	dom: {
		createContainer: true
	},
	scene: [],
	backgroundColor: '#FFFF00',
};

export function addScene(scene: Phaser.Scene) {
	(config.scene as Phaser.Scene[]).push(scene);
}