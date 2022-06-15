import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cards = ({ img, details, title, technos, link }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
			<div className="more-details">
				<FontAwesomeIcon icon={faCircleQuestion} className="question" />
				<p className="details">{details}</p>
			</div>
			<div className="capture-block">
				<a href={link} target="_blank" rel="noreferrer">
					<img src={img} alt="" className="website-capture" />
					<div className="visit-website">Visiter le site</div>
				</a>
			</div>
			<ul className="technos-used">
				{technos.map((techno) => (
					<li key={title + techno}>
						<img src={techno} alt="" className="techno-mini" />
						<p className="techno-label">{techno.slice(3, techno.length - 4)}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cards;
