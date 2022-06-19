import React from 'react';
import SocialBar from '../components/SocialBar';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Hero />
            <SocialBar />
        </div>
    );
};

export default Home;