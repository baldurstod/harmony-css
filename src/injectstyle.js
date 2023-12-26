export function injectStyle(css) {
	const htmlElement = document.createElement('style');
	htmlElement.textContent = css;
	document.head.append(htmlElement);
}
