import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import reactLogo from "../assets/React.png";
import cssLogo from "../assets/CSS.png";
import htmlLogo from "../assets/HTML.png";
import javascriptLogo from "../assets/Javascript.png";
import reduxLogo from "../assets/Redux.png";
import sassLogo from "../assets/Sass.png";
import hrnet from "../assets/capture_hrnet.jpg";
import kasa from "../assets/capture_kasa.jpg";
import fishEye from "../assets/capture_fisheye.jpg";
import petitsPlats from "../assets/capture_petits_plats.jpg";
import reservia from "../assets/capture_reservia.jpg";
import ohmyfood from "../assets/ohmyfood.jpg";
import nooblix from "../assets/capture_nooblix.jpg";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Header />
			<div className="cards">
				<Cards
					img={nooblix}
					title="Clone Netflix | Projet perso"
					details="Sur ce projet, j'ai choisi de cloner la page d'accueil de Netflix avec React. J'y ai ajouté la fonctionnalité de recherche, des dropdown dans la navigation et le slider pour chaque collection."
					link="https://olivierpire.github.io/Projet-portfolio-clone/"
					technos={[reactLogo, sassLogo]}
					github="https://github.com/OlivierPire/Projet-portfolio-clone.git"
				/>
				<Cards
					img={kasa}
					title="Kasa | OpenClassrooms"
					details="Premier projet avec react, j'ai appris à manipuler les routes avec React Router, les hooks avec useStates et useEffect entre autres, les props, ou encore à découper les différents composants afin de les rendre réutilisable."
					link="https://olivierpire.github.io/OlivierPire_11_090222/"
					technos={[reactLogo, sassLogo]}
					github="https://github.com/OlivierPire/OlivierPire_11_090222.git"
				/>
				<Cards
					img={hrnet}
					title="HRnet | OpenClassrooms"
					details="Pour ce projet, je devais convertir un site jQuery en React. Je devais réintégrer les différentes fonctionnalités (tableau, menu select, datepicker) directement dans le projet, sauf un seul (modal), que j'ai du déployé sur npm et l'intégrer dans le projet react par la suite. J'ai utilisé redux pour ajouter les données avec persistor pour les stockées dans le tableau."
					link="https://olivierpire.github.io/P14_Olivier_Pire/"
					technos={[reactLogo, reduxLogo, sassLogo]}
					github="https://github.com/OlivierPire/P14_Olivier_Pire"
				/>
				<Cards
					img={fishEye}
					title="Fisheye | OpenClassrooms"
					details="Ici, je devais à l'aide d'une maquette, reproduire un site en utilisant la méthode factory, en ajoutant un carrousel pour les images, en utilisant des méthodes de tri pour les hashtags ou le menu dropdown, et en incrémentant le nombre de likes. "
					link="https://olivierpire.github.io/OlivierPire_06_220921/index.html"
					technos={[htmlLogo, sassLogo, javascriptLogo]}
					github="https://github.com/OlivierPire/OlivierPire_06_220921"
				/>
				<Cards
					img={petitsPlats}
					title="Les petits plats | OpenClassrooms"
					details="Sur ce projet, le but était de développer un algorithme de recherche, avec la possibilité pour l'utilisateur soit de rechercher dans la barre de recherche directement, soit de rechercher dans un des 3 catégories. "
					link="https://olivierpire.github.io/OlivierPire_7_11112021/"
					technos={[htmlLogo, sassLogo, javascriptLogo]}
					github="https://github.com/OlivierPire/OlivierPire_7_11112021"
				/>
				<Cards
					img={ohmyfood}
					title="OhMyFood | OpenClassrooms"
					details="L'objectif ici était d'abord de faire une application mobile-first en respectant la maquette à la lettre, puis d'ajouter des animations en css comme les coeurs, le loader et le check au niveau du survol des recettes."
					link="https://olivierpire.github.io/OlivierPire_3_05082021/index.html"
					technos={[htmlLogo, sassLogo]}
					github="https://github.com/OlivierPire/OlivierPire_3_05082021"
				/>
				<Cards
					img={reservia}
					title="Réservia | OpenClassrooms"
					details="Sur ce projet, je devais créer un site statique sans fonctionnalités, le but ici était d'intégrer fidèlement une maquette en Html et Css"
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
