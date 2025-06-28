import React from 'react';
import Hero from './hero/Hero';
import AboutMe from './aboutMe/AboutMe';
import Skills from './skills/Skills';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;
