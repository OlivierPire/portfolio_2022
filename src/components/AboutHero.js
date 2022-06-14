import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutHero = () => {
	return (
		<div className="about-hero">
			<img src="../blue2.png" alt="" className="portrait" />
			<p className="about-text">
				Bonjour, je m'appelle <span>Olivier</span>, j'ai 27 ans. <br />
				<br /> Suite à plusieurs expériences dans différents domaines, <br />
				j'ai décidé de trouver ma voie, celle qui allait me passionné et me boosté
				au quotidien. <br />
				<br /> C'est donc dans cette optique que j'ai entamé une reconvertion en
				tant que <span>développeur Front-end</span>, avec un diplôme chez
				OpenClassrooms. <br /> <br />
				Aujourd'hui à la recherche d'une première expérience, <br />je vous invite à jeter
				un oeil à mon <NavLink to={"/portfolio"}>Portfolio</NavLink> ou à
				télécharger mon{" "}
				<Link to="../html.png" target="_blank" download>
					CV
				</Link> pour en savoir plus.
			</p>
		</div>
	);
};

export default AboutHero;
