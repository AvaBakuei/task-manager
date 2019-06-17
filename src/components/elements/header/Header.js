import React from "react";
import { Link } from "react-router-dom";

//local
import "./Header.scss";
import { CONSTANTS_MENU } from "../../../constants/components/constantsMenu";

const Header = ({ className, img, children }) => {
	return (
		<header className={`header ${className ? className : ""}`}>
			<div className="container header-top">
				<div className="header-top__logo">
					<img
						src={require("../../../assets/media/logo.png")}
						alt="logo"
					/>
				</div>
				<nav className="header-nav">
					{CONSTANTS_MENU.MENU.filter(item => item.header).map(
						(item, index) => (
							<Link
								key={index}
								to={item.links}
								className="header-nav__item"
							>
								{item.title}
							</Link>
						)
					)}
				</nav>
			</div>
			{img ? <img src={img} alt="background" /> : ""}
			{children}
		</header>
	);
};

export { Header };
