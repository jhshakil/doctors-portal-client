import React from 'react';
import Appoint from './Appoint';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appoint></Appoint>
        </div>
    );
};

export default Home;