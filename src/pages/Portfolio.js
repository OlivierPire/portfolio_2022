import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Header />
			<div className="cards">
				<Cards
					img="../capture_hrnet.jpg"
					title="HRnet | OpenClassrooms"
					details="Projet Openclassrooms développer avec React à l'aide de redux toolkit pour la partie stockage de données en local, le but du projet était de convertir une application jQuery en react et de créer un package déployer sur npm et l'intégrer dans l'application 'en l'occurence la modal). "
					link="https://olivierpire.github.io/P14_Olivier_Pire/"
					technos={['../React.png', '../Redux.png', '../Sass.png']}
				/>
				<Cards
					img="../capture_petits_plats.jpg"
					title="Les petits plats | OpenClassrooms"
					details="Projet Openclassrooms développer avec React à l'aide de redux toolkit pour la partie stockage de données en local, le but du projet était de convertir une application jQuery en react et de créer un package déployer sur npm et l'intégrer dans l'application 'en l'occurence la modal). "
					link="https://olivierpire.github.io/OlivierPire_7_11112021/"
					technos={['../Sass.png', '../Javascript.png']}
				/>
				<Cards
					img="../capture_fisheye.jpg"
					title="Fisheye | OpenClassrooms"
					details="Projet Openclassrooms développer avec React à l'aide de redux toolkit pour la partie stockage de données en local, le but du projet était de convertir une application jQuery en react et de créer un package déployer sur npm et l'intégrer dans l'application 'en l'occurence la modal). "
					link="https://olivierpire.github.io/OlivierPire_06_220921/index.html"
					technos={['../Sass.png', '../Javascript.png']}
				/>
				<Cards
					img="../capture_reservia.jpg"
					title="Réservia | OpenClassrooms"
					details="Projet Openclassrooms développer avec React à l'aide de redux toolkit pour la partie stockage de données en local, le but du projet était de convertir une application jQuery en react et de créer un package déployer sur npm et l'intégrer dans l'application 'en l'occurence la modal). "
					link="https://olivierpire.github.io/OlivierPire_2_06072021/"
					technos={['../HTML.png', '../CSS.png']}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
