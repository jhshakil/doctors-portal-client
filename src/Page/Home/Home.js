import React from 'react';
import Appoint from './Appoint';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';
import Footer from '../Shared/Footer/Footer'
import Contact from '../Shared/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appoint></Appoint>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;