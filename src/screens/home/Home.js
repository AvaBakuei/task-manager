import React from "react";
import { withRouter } from "react-router-dom";

//local
import "./Home.scss";
import { Header } from "../../components/elements/header/Header";
import { Button } from "../../components/commons";
const Home = withRouter(({ history }) => {
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
		</div>
	);
});

export { Home };
