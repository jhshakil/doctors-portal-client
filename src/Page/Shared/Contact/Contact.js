import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='p-8'>
            <div className='my-8'>
                <p className='text-lg text-secondary text-center'>Contact Us</p>
                <h3 className='text-3xl text-white text-center'>Stay connected with us</h3>
            </div>
            <form className='grid grid-cols-1 gap-4 justify-items-center'>
                <input type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Enter Your Subject" class="input input-bordered w-full max-w-xs" />
                <input type="textarea" placeholder="Your Massage" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value='submit' class="input input-bordered text-white bg-gradient-to-r from-secondary to-primary font-bold max-w-xs" />
            </form>
        </div>
    );
};

export default Contact;