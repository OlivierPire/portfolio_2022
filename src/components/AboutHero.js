import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const AboutHero = () => {
	return (
		<div className="about-hero">
			<img src="./blue2.png" alt="" className="portrait" />
			<div className="about-text">
				<p>
					Bonjour, je m'appelle <span>Olivier</span>, j'ai 27 ans. <br />
					<br /> Suite à plusieurs expériences dans différents domaines, <br />
					J'ai décidé de trouver ma voie, celle qui allait me passionner et me booster
					au quotidien. <br />
					<br /> C'est donc dans cette optique que j'ai entamé une reconversion en
					tant que <span>développeur Front-end</span>, avec un diplôme chez
					OpenClassrooms. <br /> <br />
					Aujourd'hui à la recherche d'une première expérience, <br />Je vous invite à jeter
					un œil à mon <NavLink to={"/portfolio"}>Portfolio</NavLink> ou à
					télécharger mon{" "}
					<Link to="./html.png" target="_blank" download>
						CV
					</Link> pour en savoir plus.
				</p>
				<p className="contact">
					<ul className="mail-phone">
						<li><FontAwesomeIcon icon={faEnvelope} className='contact-icons' />olivier.pire@outlook.fr</li>
						<li><FontAwesomeIcon icon={faPhone} className='contact-icons' />07.69.03.26.58</li>
					</ul>
					<ul className="social-contact">
						<li><a href="https://www.linkedin.com/in/olivier-pire" target="_blank" rel="noreferrer"><img src="./linkedin.png" alt="" /></a></li>
						<li><a href="https://github.com/OlivierPire"><img src="./GitHub.png" alt="" /></a></li>
					</ul>
				</p>
			</div>
		</div>
	);
};

export default AboutHero;
