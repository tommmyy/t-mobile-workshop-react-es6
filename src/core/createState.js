export const createState = (initialState = { users: [] }) => {
	let state = initialState;

	return {
		getUsers: () => state.users,
		addUser: (user) => {
			state.users = [...state.users, user];

			console.log('New state', state);
		}
	};
};
