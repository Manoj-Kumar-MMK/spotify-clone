import React from "react";
import { loginUrl } from "./spotify";
const Login = () => {
	return (
		<div className="login">
			<img src="images/spotify.gif" alt="Spotify" />
			<a href={loginUrl}>LOGIN TO SPOTIFY</a>
		</div>
	);
};

export default Login;
