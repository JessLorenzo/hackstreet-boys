import React from "react";
import "./hackstreet-button.scss";

const HackstreetButton = ({ className, onClick, children }) => {
	return (
		<button className={`hackstreet-button ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default HackstreetButton;
