import React from "react";
//local
import "./Button.scss";

const Button = ({ type, className, onClick, title, btnIcon }) => {
	let props = {};
	switch (type) {
		case "primary":
			props = {
				className: "primary",
			};
			break;

		case "public":
			props = {
				className: "public",
			};
			break;
		default:
			break;
	}

	return (
		<button
			className={`button ${className ? className : ""}`}
			{...props}
			onClick={onClick}
		>
			<span>{title}</span>
			{btnIcon ? <i className={btnIcon} /> : null}
		</button>
	);
};

export { Button };
