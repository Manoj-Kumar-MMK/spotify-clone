import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<Search />
				<input placeholder="Search for artists or songs" type="text" />
			</div>
			<div className="header__right">
				<Avatar>M</Avatar>
				<p> Manoj Kumar</p>
			</div>
		</div>
	);
};

export default Header;
