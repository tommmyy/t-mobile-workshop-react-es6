(function(namespace, global) {
	var DOMUtils = {
		renderToElement: function(el, render, state) {
			el.innerHTML = render(state);
		}
	};

	var StringUtils = {
		toUpperFirst: function(x) {
			return x.charAt(0).toUpperCase() + x.slice(1);
		}
	};

	var rootElement = document.getElementById('root');

	function createState(initialState) {
		var state = initialState || {
			users: []
		};

		return {
			addUser: function addUser(user) {
				var users = state.users.slice(); // copy of an array
				users.push(user);

				state.users = users;
			},
			getUsers: function getUsers() {
				return state.users;
			}
		};
	}

	var AppState = createState();

	function renderUserList(users) {
		return (
			'<ul>' +
			users.map(function(user) {
				return (
					'<li>' +
					StringUtils.toUpperFirst(user.name) +
					' ' +
					StringUtils.toUpperFirst(user.surname) +
					'</li>'
				);
			}).join('') +
			'</ul>'
		);
	}

	function render() {
		DOMUtils.renderToElement(rootElement, renderUserList, AppState.getUsers());
	}

	global[namespace] = {
		addUser: AppState.addUser,
		render: render
	};
})('APP', window);

window.APP.addUser({
	name: 'Jan',
	surname: 'Novák'
});

window.APP.render();
