import React from 'react';
import Hero from '../Component/Home/Hero';
import Proyect from '../Component/Home/Proyect';
import Services from '../Component/Home/Services';
import CTA_Home from "../Component/Home/CTA";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Proyect />
            <CTA_Home />
        </div>
    );
};

export default Home;