import React from "react";

//local
import "./Header.scss";
import { CONSTANTS_MENU } from "../../../constants/components/constantsMenu";

const Header = ({ children }) => {
	return (
		<header className="header">
			<div className="container header-section">
				<div className="header-section__logo">
					<img
						src={require("../../../assets/media/logo.png")}
						alt="logo"
					/>
				</div>
				<nav className="header-nav">
					{CONSTANTS_MENU.MENU.filter(item => item.header).map(
						(item, index) => (
							<div key={index} className="header-nav__item">
								{item.title}
							</div>
						)
					)}
				</nav>
			</div>
			{children}
		</header>
	);
};

export { Header };
