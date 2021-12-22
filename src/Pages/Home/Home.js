import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Navigation from '../Shared/Navigation/Navigation';
import React from 'react';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner /> 
        </div>
    );
};

export default Home;