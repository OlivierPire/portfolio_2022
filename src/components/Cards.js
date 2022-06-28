import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { faClose, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ img, details, title, technos, link, github, linkBis }) => {
	const [isOpen, setIsOpen] = useState(false);
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
							<p className="techno-label">{techno.slice(2, techno.length - 4)}</p>
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
				<a href={github} className='github-link' target='_blank' rel="noreferrer">Voir le repo GitHub <FontAwesomeIcon icon={faUpRightFromSquare} /></a>
				<ul className="technos-used">
					{technos.map((techno) => (
						<li key={title + techno}>
							<img src={techno} alt="" className="techno-mini" />
							<p className="techno-label">{techno.slice(2, techno.length - 4)}</p>
						</li>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Cards;
