import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import reactLogo from '../assets/React.png'
import cssLogo from '../assets/CSS.png'
import htmlLogo from '../assets/HTML.png'
import javascriptLogo from '../assets/Javascript.png'
import reduxLogo from '../assets/Redux.png'
import sassLogo from '../assets/Sass.png'
import hrnet from '../assets/capture_hrnet.jpg'
import fishEye from '../assets/capture_fisheye.jpg'
import petitsPlats from '../assets/capture_petits_plats.jpg'
import reservia from '../assets/capture_reservia.jpg'

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Header />
			<div className="cards">
				<Cards
					img={hrnet}
					title="HRnet | OpenClassrooms"
					details=""
					link="https://olivierpire.github.io/P14_Olivier_Pire/"
					technos={[reactLogo, reduxLogo, sassLogo]}
					github="https://github.com/OlivierPire/P14_Olivier_Pire"
				/>
				<Cards
					img={petitsPlats}
					title="Les petits plats | OpenClassrooms"
					details=""
					link="https://olivierpire.github.io/OlivierPire_7_11112021/"
					technos={[sassLogo, javascriptLogo]}
					github="https://github.com/OlivierPire/OlivierPire_7_11112021"
				/>
				<Cards
					img={fishEye}
					title="Fisheye | OpenClassrooms"
					details=""
					link="https://olivierpire.github.io/OlivierPire_06_220921/index.html"
					technos={[sassLogo, javascriptLogo]}
					github="https://github.com/OlivierPire/OlivierPire_06_220921"
				/>
				<Cards
					img={reservia}
					title="Réservia | OpenClassrooms"
					details=""
					link="https://olivierpire.github.io/OlivierPire_2_06072021/"
					technos={[htmlLogo, cssLogo]}
					github="https://github.com/OlivierPire/OlivierPire_2_06072021"
				/>
			</div>
			<SocialBar />
		</div>
	);
};

export default Portfolio;
