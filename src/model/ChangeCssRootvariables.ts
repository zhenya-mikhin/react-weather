import { Theme } from './../context/ThemeContext';
export function changeCssRootVariables(theme: Theme) {
	const components = [
		'body-background',
		'components-background',
		'card-background',
		'card-shadow',
		'components-shadow',
		'text-color'
	]
	const root = document.querySelector(':root') as HTMLElement

	components.forEach(component => {
		root.style.setProperty(
			`--${component}-default`,
			`var(--${component}-${theme})`
		)
	})
}