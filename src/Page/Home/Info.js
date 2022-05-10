import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 px-8 my-4 text-white'>
            <div className='bg-gradient-to-r from-secondary to-primary p-8 rounded-lg flex items-center'>
                <div className='w-1/4'>
                    <img src={clock} alt="" />
                </div>
                <div className='mx-8'>
                    <h3 className='text-xl font-bold mb-2'>Opening Hours</h3>
                    <p>At 8.00 am to 6.00 pm</p>
                </div>
            </div>
            <div className='bg-accent p-8 rounded-lg flex items-center'>
                <div className='w-1/4'>
                    <img src={marker} alt="" />
                </div>
                <div className='mx-8'>
                    <h3 className='text-xl font-bold mb-2'>Visit our location</h3>
                    <p>Brooklyn, NY 10036, United States.</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-secondary to-primary p-8 rounded-lg flex items-center'>
                <div className='w-1/4'>
                    <img src={phone} alt="" />
                </div>
                <div className='mx-8'>
                    <h3 className='text-xl font-bold mb-2'>Contact us now</h3>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;