export const initialState = {
	user: null,
	playlist: [],
	playing: false,
	item: null,
	token: null,
};
export const actionTypes = {
	setUser: "SET_USER",
	setToken: "SET_TOKEN",
	setPlaylists: "SET_PLAYLISTS",
	setDiscoverWeekly: "SET_DISCOVER_WEEKLY",
};
export const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.payload.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.payload.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discoverWeekly: action.payload.discoverWeekly,
			};
		default:
			return state;
	}
};
