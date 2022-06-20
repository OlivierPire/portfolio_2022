import React from 'react';
import Loader from './Loader';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header'>
            <Loader />
            <Navigation />
        </div>
    );
};

export default Header;