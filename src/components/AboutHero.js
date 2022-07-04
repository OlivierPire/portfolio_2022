import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import pictureOfMe from "../assets/blue2.png";
import githubLogo from "../assets/GitHub.png";
import linkedinLogo from "../assets/linkedin.png";
import cv from "../assets/Cv.pdf";

const AboutHero = () => {
	return (
		<div className="about-hero">
			<img src={pictureOfMe} alt="" className="portrait" />
			<div className="about-text">
				<p>
					Bonjour, je m'appelle <span>Olivier</span>, j'ai 27 ans. <br />
					<br /> Passionné par le numérique depuis toujours, j’ai d’abord débuté des
					cours en ligne d’Html, de Css et de Javascript afin de voir si ce métier
					pouvait me plaire. J'ai découvert une vraie passion. <br />
					<br /> C'est donc dans cette optique que j'ai entamé une reconversion en
					tant que <span>développeur Front-end</span>, avec un diplôme chez
					OpenClassrooms. <br /> <br />
					Aujourd'hui à la recherche d'une première expérience, <br />
					Je vous invite à jeter un œil à mon{" "}
					<NavLink to={"/portfolio"}>Portfolio</NavLink> ou à{" "}
					<a href={cv} download="CV_Pire_Olivier" target="_blank" rel="noreferrer">
						télécharger mon CV
					</a>{" "}
					pour en savoir plus.
				</p>
				<div className="contact">
					<ul className="mail-phone">
						<li>
							<FontAwesomeIcon icon={faEnvelope} className="contact-icons" />
							olivier.pire@outlook.fr
						</li>
						<li>
							<FontAwesomeIcon icon={faPhone} className="contact-icons" />
							07.69.03.26.58
						</li>
					</ul>
					<ul className="social-contact">
						<li>
							<a
								href="https://www.linkedin.com/in/olivier-pire"
								target="_blank"
								rel="noreferrer"
							>
								<img src={linkedinLogo} alt="" />
							</a>
						</li>
						<li>
							<a
								href="https://github.com/OlivierPire"
								target="_blank"
								rel="noreferrer"
							>
								<img src={githubLogo} alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutHero;
