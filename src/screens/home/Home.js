import React, { useState } from "react";
import ReactPlayer from "react-player";

//local
import "./Home.scss";
import { Header } from "../../components/elements/header/Header";
import { Button } from "../../components/commons";
import { Section } from "./components";

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

const trackingSection = {
	img1: require("../../assets/media/img1.png"),
	img2: require("../../assets/media/img2.png"),
	icon: "icon-clock",
	title: "Keep Tracking Your Work Progress",
	caption:
		"Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. Pellentesque tempus gravida viverra. Pellentesque dui vehicula. ",
	btnTitle: "Learn More",
};

const analyseSection = {
	img1: require("../../assets/media/img3.png"),
	img2: require("../../assets/media/img2.png"),
	icon: "icon-list",
	title: "Analyse Your Expertise & Capabilities",
	caption:
		"Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. Pellentesque tempus gravida viverra. Pellentesque dui vehicula. ",
	btnTitle: "Learn More",
};
const Home = () => {
	const [play, setPlay] = useState(false);
	const handlePlay = () => {
		setPlay(!play);
	};
	return (
		<div className="wrapper">
			<Header
				className="home-header"
				img={require("../../assets/media/bg.svg")}
			>
				<h1>Task-Manager</h1>
				<div className="center header-bottom">
					<div className="header-content">
						<h2>Manage All of Your Tasks in One Palce.</h2>
						<p>
							Nullam euismod tellus nec tortor ornare from id
							luctus lorem pharetra.
						</p>
						<a href="/" target="_blank">
							<Button
								className="large"
								title="Learn More"
								btnIcon="icon-right"
							/>
						</a>
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
				<Section data={trackingSection} className="tracking-section" />
				<Section data={analyseSection} className="analyse-section" />
				<section className="demo">
					<div className="demo-info">
						<div className="demo-title">
							<h3 className="title">How It Works</h3>
							<p className="caption">
								Donec tempor finibus ante ac luctus. Fusce
								facilisis nisi vel odio tincidunt maximus.
								Pellentesque tempus gravida viverra.
							</p>
						</div>
						<div className="demo-video">
							<ReactPlayer
								url={require("../../assets/media/Zoom.mp4")}
								className="react-player"
								playing={play}
								width="100%"
								height="100%"
							/>
							<span
								className="demo-video__btn"
								onClick={handlePlay}
							>
								<i className="icon-play" />
							</span>
						</div>
					</div>
					<div className="get-app">
						<div className="app-desc">
							<h4 className="title">Get This App Now </h4>
							<p className="caption">
								Donec tempor finibus ante ac luctus. Fusce
								facilisis nisi vel odio tincidunt maximus.
								Pellentesque tempus gravida viverra.
								Pellentesque dui vehicula.
							</p>
						</div>
						<div className="app-link">
							<a href="/">
								<img
									src={require("../../assets/media/app-store.png")}
									alt="appstore logo"
								/>
							</a>
							<a href="/">
								<img
									src={require("../../assets/media/google-play.png")}
									alt="googleplay logo"
								/>
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export { Home };
