import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import SidebarOption from "./SidebarOption";
import { useDetails } from "./StateProvider";

const Sidebar = () => {
	const [{ playlists }] = useDetails();
	console.log(playlists);
	return (
		<div className="sidebar">
			<img src="images/spotify.gif" alt="spotify" />
			<SidebarOption title="Home" Icon={Home} />
			<SidebarOption title="Search" Icon={Search} />
			<SidebarOption title="Library" Icon={LibraryMusic} />
			<h3>PLAYLIST</h3>
			<hr />
			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	);
};

export default Sidebar;
