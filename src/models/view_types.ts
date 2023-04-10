export const viewTypes = {
	textBased: 'textBased',
};

export type ViewType = typeof viewTypes[keyof typeof viewTypes];