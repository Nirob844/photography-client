import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;