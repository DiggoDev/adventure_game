const assets = {
	menuBackground: 'assets/images/backgrounds/menu_background.png',
	gameBackground: 'assets/images/backgrounds/game_background.png',
};

type AssetsImagesKeys = keyof typeof assets;


export class Assets {
	public readonly values = assets;
	public readonly assetsKeys: {[k in AssetsImagesKeys]: string};
	constructor() {
		this.assetsKeys = this.createAssetsKeysObject();
	}
	private createAssetsKeysObject() {
		const assetsKeys: Record<string, string> = {};
		for (const key in assets) {
			assetsKeys[key] = key;
		}
		return assetsKeys as {[k in AssetsImagesKeys]: string};
	}
	
}


