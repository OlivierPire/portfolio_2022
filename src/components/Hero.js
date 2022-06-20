import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Technos from "./Technos";
import { NavLink } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero">
			<div className="presentation">
				<h1>Olivier Pire</h1>
				<h2>
					Développeur d'application <br /> <span>front-End</span>
				</h2>
				<NavLink to='/portfolio' className="btn-block">
					<button className="hero-btn" aria-label="bouton portfolio">
						<FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
					</button>
					<p className='btn-title'>Découvrir mes réalisations</p>
				</NavLink>
			</div>
			<Technos />
			{/* <img src="../motif.png" alt="" className="bubble" /> */}
		</div>
	);
};

export default Hero;
