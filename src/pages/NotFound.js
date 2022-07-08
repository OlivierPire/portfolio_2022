import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>404</h1>
			<h2>Page non trouvée</h2>
			<p>La page demandée n'existe pas</p>
			<NavLink
				to="/"
				className={(navData) => (navData.isActive ? "nav-active" : "")}
			>
				Retour sur la page d'accueil
			</NavLink>
		</div>
	);
};

export default NotFound;
