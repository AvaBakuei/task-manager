import React from "react";
import { withRouter } from "react-router-dom";

//local
import "./Home.scss";
import { Header } from "../../components/elements/header/Header";
import { Button } from "../../components/commons";
const featuresData = [
	{
		icon: "cloud",
		title: "Cloud Storage",
		caption: "Donec tempor finibus ante ac luctus. Fusce facilisis nisi.",
	},
	{
		icon: "system",
		title: "Powerful System",
		caption: "Donec tempor finibus ante ac luctus. Fusce facilisis nisi.",
	},
	{
		icon: "performance",
		title: "Heigh Performance",
		caption: "Donec tempor finibus ante ac luctus. Fusce facilisis nisi.",
	},
	{
		icon: "management",
		title: "Easy Management",
		caption: "Donec tempor finibus ante ac luctus. Fusce facilisis nisi.",
	},
];
	return (
		<div className="wrapper">
			<Header className="home-header">
				<h1>Task-Manager</h1>
				<div className="container header-bottom">
					<div className="header-content">
						<h2>Manage All of Your Tasks in One Palce.</h2>
						<p>
							Nullam euismod tellus nec tortor ornare from id
							luctus lorem pharetra.
						</p>
						<Button
							title="Learn More"
							btnIcon="icon-right"
							onClick={() => {
								history.push("/");
							}}
						/>
					</div>
					<div className="header-mockup">
						<div className="header-mockup__img">
							<img
								src={require("../../assets/media/mockup01.png")}
								alt="images"
							/>
						</div>
					</div>
				</div>
			</Header>
			<main>
				<section className="center features">
					{featuresData.map((item, index) => (
						<div className="features-item" key={index}>
							<span
								className={`features-item__icon ${item.icon}`}
							>
								<i className={`icon-${item.icon}`} />
							</span>
							<h3>{item.title}</h3>
							<p>{item.caption}</p>
						</div>
					))}
				</section>
				<Section data={progressSection} />
			</main>
		</div>
	);
});

export { Home };
