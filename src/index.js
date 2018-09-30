import { renderToElement } from './utils';
import { createState, render } from './core';

const rootElement = document.getElementById('root');

const AppState = createState();

const rerender = renderToElement(rootElement)(render);

AppState.addUser({
	name: 'jan',
	surname: 'novák'
});

AppState.addUser({
	name: 'Jana',
	surname: 'Nováková'
});

rerender(AppState);
