export const renderToElement = (el) => (render) => (state) => {
	el.innerHTML = render(state);
};
