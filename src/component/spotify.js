export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "201afb2b16ae471ab47ba02986c790fe";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-playes",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};
