import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import {
	faClose,
	faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../assets/React.png";
import javascriptLogo from "../assets/Javascript.png";
import reduxLogo from "../assets/Redux.png";
import sassLogo from "../assets/Sass.png";
import cssLogo from "../assets/CSS.png";
import htmlLogo from "../assets/HTML.png";

const Cards = ({ img, details, title, technos, link, github, linkBis }) => {
	const [isOpen, setIsOpen] = useState(false);
	const whichTech = (techno) => {
		switch (techno) {
			case reactLogo:
				return "React";
			case reduxLogo:
				return "Redux";
			case javascriptLogo:
				return "Javascript";
			case sassLogo:
				return "Sass";
			case cssLogo:
				return "Css";
			case htmlLogo:
				return "Html";
			default:
				return "";
		}
	};
	return (
		<React.Fragment>
			<div className="card">
				<h2>{title}</h2>
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
							<p className="techno-label">{whichTech(techno)}</p>
						</li>
					))}
				</ul>
				<button className="more-details-btn" onClick={() => setIsOpen(true)}>
					Plus d'infos
				</button>
			</div>
			<div
				className="more-details"
				style={isOpen ? { display: "block" } : { display: "none" }}
			>
				<FontAwesomeIcon
					icon={faClose}
					className="close-btn"
					onClick={() => setIsOpen(false)}
				/>
				<h2>{title}</h2>
				<img src={img} alt="" className="website-capture" />
				<a href={link} target="_blank" rel="noreferrer">
					<div className="visit-website">Visiter le site</div>
				</a>
				<p className="details">{details}</p>
				<a href={github} className="github-link" target="_blank" rel="noreferrer">
					Voir le repo GitHub <FontAwesomeIcon icon={faUpRightFromSquare} />
				</a>
				<ul className="technos-used">
					{technos.map((techno) => (
						<li key={title + techno}>
							<img src={techno} alt="" className="techno-mini" />
							<p className="techno-label">{whichTech(techno)}</p>
						</li>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Cards;
