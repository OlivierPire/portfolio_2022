import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/about" className={(navData) => navData.isActive ? 'nav-active' : ""}>À propos</NavLink>
			<NavLink to="/portfolio" className={(navData) => navData.isActive ? 'nav-active' : ""}>Portfolio</NavLink>
			<NavLink to="/contact" className={(navData) => navData.isActive ? 'nav-active' : ""}>Contact</NavLink>
		</div>
	);
};

export default Navigation;
