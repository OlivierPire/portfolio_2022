import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
   
    return (
        <div className='header'>
            <div className="background-bar"></div>
            <NavLink to='/'><FontAwesomeIcon icon={faHouse} className='house-icon' /><h1>Olivier Pire</h1></NavLink>
            <Navigation />
        </div>
    );
};

export default Header;