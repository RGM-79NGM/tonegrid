export type Theme = {
	label: string;
	bg: string;
	bgDarker: string;
	highlight: string;
	text: string;
	textFaint: string;
	textDark: string;
	error: string;
	errorDarker: string;
	colorfulError: string;
	colorfulErrorDarker: string;
	block1: string;
	block2: string;
	block3: string;
	block4: string;
	block5: string;
};

export const themes: Record<string, Theme> = {
	indigo: {
		label: 'Plateau Indigo',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(239 84% 67%)', // Base color (Tailwind indigo-500 equivalent)
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(239 84% 47%)', // darker step
		block3: 'hsl(239 84% 57%)', // mid step
		block4: 'hsl(239 84% 67%)', // Base color
		block5: 'hsl(239 84% 72%)', // + 5%
	},
	rose: {
		label: 'Emperor Rose',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(350 91.4% 50%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(350 91.4% 30%)', // - 5%
		block3: 'hsl(350 91.4% 40%)', // - 5%
		block4: 'hsl(350 91.4% 50%)', // Base color
		block5: 'hsl(350 91.4% 55%)', // + 5%
	},
	terminal: {
		label: 'Terminal',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(79 75.7% 37.1%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(79 75.7% 23.74%)', // - 5%
		block3: 'hsl(79 75.7% 29.68%)', // - 5%
		block4: 'hsl(79 75.7% 37.1%)', // Base color
		block5: 'hsl(79 75.7% 44.52%)', // + 5%
	},
	orange: {
		label: 'Orange',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(25 95% 53%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(25 95% 33%)',
		block3: 'hsl(25 95% 43%)',
		block4: 'hsl(25 95% 53%)', // Base color
		block5: 'hsl(25 95% 58%)', // + 5%
	},
	violet: {
		label: 'Violet',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(262 83% 65%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(262 83% 45%)',
		block3: 'hsl(262 83% 55%)',
		block4: 'hsl(262 83% 65%)', // Base color
		block5: 'hsl(262 83% 70%)', // + 5%
	},
	pink: {
		label: 'Puffy Pink',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(330 85% 58%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(330 85% 38%)',
		block3: 'hsl(330 85% 48%)',
		block4: 'hsl(330 85% 58%)', // Base color
		block5: 'hsl(330 85% 63%)', // + 5%
	},
	cyan: {
		label: 'Crystal Cyan',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(189 94% 45%)', // Base color
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(189 94% 25%)',
		block3: 'hsl(189 94% 35%)',
		block4: 'hsl(189 94% 45%)', // Base color
		block5: 'hsl(189 94% 50%)', // + 5%
	},
	dragonBlue: {
		label: 'Dragon Blue',
		bg: 'hsl(210 3.8% 10.2%)',
		bgDarker: 'hsl(210 4.8% 8.2%)',
		text: 'hsl(78 19.2% 89.8%)',
		textFaint: 'hsl(220 2% 28.8%)',
		textDark: 'hsl(210 3.8% 10.2%)',
		error: 'hsl(0 75.7% 37.1%)',
		errorDarker: 'hsl(0 75.6% 25.7%)',
		colorfulError: 'hsl(0 75.7% 37.1%)',
		colorfulErrorDarker: 'hsl(0 75.6% 25.7%)',
		highlight: 'hsl(217 91% 58%)', // Base color (deep electric cobalt/dragon blue)
		block1: 'hsl(210 3.8% 10.2%)', // neutral - same as bg
		block2: 'hsl(217 91% 38%)',
		block3: 'hsl(217 91% 48%)',
		block4: 'hsl(217 91% 58%)', // Base color
		block5: 'hsl(217 91% 63%)', // + 5%
	},
};

export function returnColorTheme(themeName: string) {
	if (!themeName) return;

	return themes[themeName];
}

export function returnColorIntensity(theme: Theme, num: number) {
	if (!theme || num == null || num == undefined) return;

	switch (num) {
		case 0:
			return theme.block1;
		case 1:
			return theme.block2;
		case 2:
			return theme.block3;
		case 3:
			return theme.block4;
		case 4:
			return theme.block5;
		default:
			return theme.block4; // Default highlight color
	}
}
