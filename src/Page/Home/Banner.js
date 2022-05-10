import React from 'react';
import chair from '../../assets/images/chair.png';
import bgimage from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className='px-4'>
            <div style={{
                background: `url(${bgimage})`
            }} class='hero min-h-screen'>
                <div class="hero-content flex-col lg:flex-row-reverse w-full">
                    <img src={chair} class="max-w-lg rounded-lg shadow-2xl w-full lg:w-1/2" alt='' />
                    <div className='px-4 w-full lg:w-1/2'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;