import React from "react";

//local
import "./Section.scss";
import { Button } from "../../../../components/commons";

const Section = props => {
	const { data, className, children } = props;
	return (
		<section className={`section container ${className ? className : ""}`}>
			<div className="section-left">
				<img src={data.img1} alt="images" />
				<img src={data.img2} alt="images" />
			</div>
			<div className="section-right">
				{data.icon ? <i className={data.icon} /> : ""}
				<h2>{data.title}</h2>
				<p>{data.caption}</p>
				<a href="/">
					<Button
						className="primary"
						title={data.btnTitle}
						btnIcon="icon-right"
					/>
				</a>
			</div>
			{children}
		</section>
	);
};

export { Section };
