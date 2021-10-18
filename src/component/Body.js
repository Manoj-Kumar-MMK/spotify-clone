import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDetails } from "./StateProvider";

const Body = ({ spotify }) => {
	const [{ discoverWeekly }, dispatch] = useDetails();
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discoverWeekly?.images[0].url} alt="discover" />
				<div className="body__infoText">
					<h2>PLAYLIST</h2>
					<h1>Discover Weekly</h1>
					<p>{discoverWeekly?.description}</p>
				</div>
			</div>
			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilled />
					<Favorite />
					<MoreHoriz />
				</div>
			</div>
			{discoverWeekly?.tracks?.items.map((item) => (
				<SongRow track={item.track} />
			))}
		</div>
	);
};

export default Body;
