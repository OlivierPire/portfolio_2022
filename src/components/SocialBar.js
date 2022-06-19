import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCaretRight, faCaretLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SocialBar = () => {
    const [socialMediaIsOpen, setSocialMediaIsOpen] = useState(false)
    return (
        <div className='social-media' style={!socialMediaIsOpen ? {transform: 'translate(70%, -50%)'} : {transform: 'translate(0, -50%)'}}>
            <ul>
                <li><a href="https://github.com/OlivierPire" target='_blank' rel="noreferrer"><img src="../GitHub.png" alt="" className='media' /></a></li>
                <li><a href="https://www.linkedin.com/in/olivier-pire" target='_blank' rel="noreferrer"><img src="../linkedin.png" alt="" className='media' /></a></li>
                <li><a href="mailto:olivier.pire@outlook.fr"><FontAwesomeIcon icon={faEnvelope} className='media' /></a></li>
            </ul>
            <FontAwesomeIcon icon={ !socialMediaIsOpen? faCaretLeft : faCaretRight} className='social-media-arrow' onClick={() => socialMediaIsOpen ? setSocialMediaIsOpen(false) : setSocialMediaIsOpen(true) } />
        </div>
    );
};

export default SocialBar;