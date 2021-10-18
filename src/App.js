import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./component/Login";
import { getToken } from "./component/spotify";
import { useDetails } from "./component/StateProvider"; /* for reducer */
import { actionTypes } from "./component/reducer"; /* always use for error reduction */
import Player from "./component/Player";

function App() {
	const [{ user, token }, dispatch] = useDetails();
	const spotify = new SpotifyWebApi();

	useEffect(() => {
		const _token = getToken();
		console.log("Token : ", _token);

		if (_token.access_token) {
			dispatch({
				type: actionTypes.setToken,
				payload: {
					token: _token,
				},
			});
			spotify.setAccessToken(_token.access_token);
			spotify.getMe().then((user) => {
				console.log("USER", user);
				dispatch({
					type: "SET_USER",
					payload: {
						user: user,
					},
				});
			});
			spotify.getUserPlaylists().then((playlists) =>
				dispatch({
					type: actionTypes.setPlaylists,
					payload: {
						playlists: playlists,
					},
				})
			);
			spotify.getPlaylist("3aFgDAjqV51Gjj8G7lvsbY").then((weekly) =>
				dispatch({
					type: actionTypes.setDiscoverWeekly,
					payload: {
						discoverWeekly: weekly,
					},
				})
			);
		}
		window.location.hash = "";
	}, []);
	console.log("State of Redux[token,user,playlist]", token, user);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
