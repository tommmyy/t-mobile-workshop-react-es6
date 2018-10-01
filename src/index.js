(function(namespace, global) {
	const DOMUtils = {
		renderToElement: (el, render, state) => {
			el.innerHTML = render(state);
		}
	};

	const StringUtils = {
		toUpperFirst: (x) => x.charAt(0).toUpperCase() + x.slice(1)
	};

	const rootElement = document.getElementById('root');

	const createState = (initialState) => {
		const state = initialState || {
			users: []
		};

		return {
			addUser(user) {
				state.users = [...state.users, user];
			},
			getUsers() {
				return state.users;
			}
		};
	};

	const AppState = createState();

	const capitalize = (strings, ...values) =>
		strings.map(
			(value, i) => `${value}${StringUtils.toUpperFirst(values[i] || '')}`
		).join('');

	const renderUser = (user) => capitalize`<li>${user.name} ${user.surname}</li>`;

	const renderUserList = (users) => `<ul>${users.map(renderUser).join('')}</ul>`;

	const render = () => DOMUtils.renderToElement(
		rootElement,
		renderUserList,
		AppState.getUsers()
	);

	global[namespace] = {
		addUser: AppState.addUser,
		render
	};
})('APP', window);

window.APP.addUser({
	name: 'Jana',
	surname: 'Nováková'
});

window.APP.render();
