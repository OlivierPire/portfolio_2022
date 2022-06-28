import React from 'react';
import reactLogo from '../assets/React.png'
import cssLogo from '../assets/CSS.png'
import htmlLogo from '../assets/HTML.png'
import gitLogo from '../assets/Git.png'
import githubLogo from '../assets/GitHub.png'
import javascriptLogo from '../assets/Javascript.png'
import reduxLogo from '../assets/Redux.png'
import sassLogo from '../assets/Sass.png'

const Technos = () => {    
    return (
        <div className='technos'>
            <img src={cssLogo} alt="logo css" className='technos-img css' />
            <img src={htmlLogo} alt="logo html" className='technos-img html' />
            <img src={gitLogo} alt="logo git" className='technos-img git' />
            <img src={githubLogo} alt="logo github" className='technos-img github' />
            <img src={reactLogo} alt="logo react" className='technos-img react' />
            <img src={javascriptLogo} alt="logo javascript" className='technos-img js' />
            <img src={reduxLogo} alt="logo redux" className='technos-img redux' />
            <img src={sassLogo} alt="logo sass" className='technos-img sass' />
        </div>
    );
};

export default Technos;