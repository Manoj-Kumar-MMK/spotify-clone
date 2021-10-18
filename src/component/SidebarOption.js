import React from "react";

const SidebarOption = ({ Icon, title }) => {
	return (
		<div className="sidebarOption">
			{Icon && <Icon />}
			<p>{title}</p>
		</div>
	);
};

export default SidebarOption;
