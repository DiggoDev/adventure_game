export class MenuModel {
	private isOpen: boolean;

	constructor() {
		this.isOpen = false;
	}

	public openMenu (): void {
		this.isOpen = true;
	}
	public closeMenu (): void {
		this.isOpen = false;
	}
	public toggleMenu (): void {
		this.isOpen = !this.isOpen;
	}
	public isMenuOpen (): boolean {
		return this.isOpen;
	}
}